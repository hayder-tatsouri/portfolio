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

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
    signal: AbortSignal.timeout(15000),
  });

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

    const res = await fetch(openSkyUrl, {
      headers,
      signal: AbortSignal.timeout(15000),
      next: { revalidate: 30 },
    });
    console.log(`[OpenSky] states fetch returned status ${res.status}`);
    return { res, status: res.status };
  };

  const MAX_ATTEMPTS = 2;

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
  } catch (e) {
    // Record how long the whole request took
    const cause =
      e instanceof Error && e.name === "TimeoutError"
        ? "OpenSky request timed out (15s)"
        : e instanceof Error
          ? `${e.name}: ${e.message}`
          : "unknown error";
    console.error("[OpenSky] Failed to fetch flights:", cause);
    return NextResponse.json(
      { error: "Failed to fetch flights", cause },
      { status: 500 }
    );
  }
}