/**
 * @name /api/flights
 * @description Server-side proxy to OpenSky Network API.
 *              Bypasses CORS by making the request from the server.
 *              Uses OAuth2 client credentials for authenticated access (4,000 req/day
 *              vs 100/day anonymous).
 *              Query params: lamin, lomin, lamax, lomax (bounding box)
 */

import { NextRequest, NextResponse } from "next/server";

const TOKEN_URL =
  "https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token";

// Module-level cache — persists across requests as long as the server process is alive.
let cachedToken: string | null = null;
let tokenExpiresAt = 0; // epoch ms

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.OPENSKY_CLIENT_ID;
  const clientSecret = process.env.OPENSKY_CLIENT_SECRET;

  if (!clientId || !clientSecret) return null;

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
  });

  if (!res.ok) {
    console.error("OpenSky token fetch failed:", res.status, await res.text());
    return null;
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + (data.expires_in ?? 1800) * 1000;
  return cachedToken;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lamin = searchParams.get("lamin") || "30";
  const lomin = searchParams.get("lomin") || "7";
  const lamax = searchParams.get("lamax") || "38";
  const lomax = searchParams.get("lomax") || "12";

  try {
    const openSkyUrl = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

    const token = await getAccessToken();
    const headers: Record<string, string> = { "User-Agent": "portfolio-app" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(openSkyUrl, {
      headers,
      next: { revalidate: 30 },
    });

    // Log quota usage to the terminal
    const remaining = res.headers.get("x-rate-limit-remaining");
    const limit = res.headers.get("x-rate-limit-limit") || "4000";
    if (remaining !== null) {
      console.log(`[OpenSky] Quota remaining: ${remaining} / ${limit}`);
    } else {
      console.log("[OpenSky] No rate-limit header returned (likely a cached response)");
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "OpenSky API error", status: res.status },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch flights" },
      { status: 500 }
    );
  }
}