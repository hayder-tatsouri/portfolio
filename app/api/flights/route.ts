/**
 * @name /api/flights
 * @description Server-side proxy to OpenSky Network API.
 *              Bypasses CORS by making the request from the server.
 *              Uses OAuth2 client credentials for authenticated access (4,000 req/day
 *              vs 100/day anonymous).
 *              Query params: lamin, lomin, lamax, lomax (bounding box)
 */

import { NextRequest, NextResponse } from "next/server";

// Vercel serverless functions have a max duration; on Hobby this is 10s.
// OpenSky can be slow from datacenter IPs, so give it more room.
export const maxDuration = 30;

const TOKEN_URL =
  "https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token";
const ADSB_FALLBACK_URL = "https://api.adsb.lol/v2/lat";

// Module-level cache — persists across requests as long as the server process is alive.
let cachedToken: string | null = null;
let tokenExpiresAt = 0; // epoch ms

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.OPENSKY_CLIENT_ID;
  const clientSecret = process.env.OPENSKY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("[OpenSky] Missing OPENSKY_CLIENT_ID/SECRET env vars - using anonymous access");
    return null;
  }

  if (cachedToken && Date.now() < tokenExpiresAt - 30_000) {
    return cachedToken;
  }

  let res: Response;
  try {
    res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
      signal: AbortSignal.timeout(1000),
    });
  } catch (error) {
    console.error("OpenSky token request failed; using anonymous access:", error);
    return null;
  }

  if (!res.ok) {
    console.error("OpenSky token fetch failed:", res.status, await res.text());
    return null;
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in ?? 1800) * 1000;
  console.log("[OpenSky] fresh token acquired");
  return cachedToken;
}

// Serialize the underlying fetch error (e.g. ECONNRESET, ETIMEDOUT, DNS failure).
function describeCause(cause: unknown): string {
  if (!cause) return "";
  if (typeof cause === "string") return cause;
  if (cause instanceof Error) {
    const c = cause as Error & { code?: unknown };
    const code = c.code ? ` [code=${c.code}]` : "";
    if (c.cause) return `${c.name}: ${c.message}${code} -> ${describeCause(c.cause)}`;
    return `${c.name}: ${c.message}${code}`;
  }
  return String(cause);
}

async function fetchAdsbFallback(
  lamin: string,
  lomin: string,
  lamax: string,
  lomax: string,
): Promise<Response> {
  const centerLat = (Number(lamin) + Number(lamax)) / 2;
  const centerLon = (Number(lomin) + Number(lomax)) / 2;
  const url = `${ADSB_FALLBACK_URL}/${centerLat}/lon/${centerLon}/dist/250`;
  const res = await fetch(url, {
    headers: { "User-Agent": "portfolio-app" },
    signal: AbortSignal.timeout(3000),
    next: { revalidate: 30 },
  });

  if (!res.ok) return res;

  const data = await res.json();
  const states = (data.ac ?? [])
    .filter((aircraft: { flight?: string; lat?: number; lon?: number }) =>
      aircraft.flight?.trim() && aircraft.lat !== null && aircraft.lon !== null,
    )
    .map((aircraft: {
      flight: string;
      lat: number;
      lon: number;
      alt_baro?: number | string | null;
      gs?: number | null;
      track?: number | null;
    }) => [
      null,
      aircraft.flight.trim(),
      "Unknown",
      null,
      null,
      aircraft.lon,
      aircraft.lat,
      typeof aircraft.alt_baro === "number" ? aircraft.alt_baro * 0.3048 : null,
      false,
      typeof aircraft.gs === "number" ? aircraft.gs * 0.514444 : null,
      aircraft.track ?? null,
    ]);

  return NextResponse.json({ time: data.now, states });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lamin = searchParams.get("lamin") || "30";
  const lomin = searchParams.get("lomin") || "7";
  const lamax = searchParams.get("lamax") || "38";
  const lomax = searchParams.get("lomax") || "12";

  // Try up to 3 times with a short timeout so the client falls back quickly
  // when OpenSky blocks Vercel's datacenter IPs instead of hanging for ages.
  const fetchFlights = async (): Promise<{ res: Response; status: number }> => {
    const openSkyUrl = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;
    const token = await getAccessToken();
    const headers: Record<string, string> = { "User-Agent": "portfolio-app" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    console.log(`[OpenSky] attached token: ${Boolean(token)}`);
    if (!token) {
      console.error("[OpenSky] NO TOKEN - env vars likely missing in Vercel!");
    }

    try {
      const res = await fetch(openSkyUrl, {
        headers,
        signal: AbortSignal.timeout(3000),
        next: { revalidate: 30 },
      });
      console.log(`[OpenSky] states fetch returned status ${res.status}`);
      if (res.ok) return { res, status: res.status };
    } catch (error) {
      console.error("[OpenSky] states request failed; trying ADS-B fallback:", error);
    }

    const fallback = await fetchAdsbFallback(lamin, lomin, lamax, lomax);
    console.log(`[ADSB] fallback returned status ${fallback.status}`);
    return { res: fallback, status: fallback.status };
  };

  const MAX_ATTEMPTS = 1;

  try {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const { res, status } = await fetchFlights();
        // 4xx/5xx are final; network/timeout errors throw and trigger a retry.
        if (res.ok) {
          const remaining = res.headers.get("x-rate-limit-remaining");
          const limit = res.headers.get("x-rate-limit-limit") || "4000";
          console.log(
            remaining !== null
              ? `[OpenSky] Quota remaining after attempt ${attempt}: ${remaining} / ${limit}`
              : `[OpenSky] Attempt ${attempt} ok (cached response)`
          );
          const data = await res.json();
          return NextResponse.json(data);
        }
        // Only retry on 429 (rate limit) — a real error won't change on retry.
        if (status === 429) {
          await new Promise((r) => setTimeout(r, 300 * attempt));
          continue;
        }
        return NextResponse.json(
          { error: "OpenSky API error", status },
          { status: 502 }
        );
      } catch (e) {
        const isTimeout =
          e instanceof Error && (e.name === "TimeoutError" || /aborted/i.test(e.message));
        if (isTimeout && attempt < MAX_ATTEMPTS) {
            await new Promise((r) => setTimeout(r, 300 * attempt));
          continue; // transient — retry
        }
        throw e; // real error — stop
      }
    }
    // If we exhausted retries on a 429 or timeout, surface it.
    return NextResponse.json(
      { error: "OpenSky unavailable after retries" },
      { status: 502 }
    );
  } catch (err) {
    console.error("[OpenSky] Failed to fetch flights:", err);
    const errObj = err instanceof Error ? err : null;
    console.error("[OpenSky] Cause:", errObj?.cause ?? null);
    const full =
      errObj?.name === "TimeoutError"
        ? `[${errObj.name}] ${errObj.message}`
        : errObj
          ? `${errObj.name}: ${errObj.message}`
          : "unknown error";
    const causeDetail = describeCause(errObj?.cause);
    return NextResponse.json(
      { error: "Failed to fetch flights", cause: full, ...(causeDetail ? { causeDetail } : {}) },
      { status: 500 }
    );
  }
}