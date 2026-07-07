/**
 * @name /api/flights
 * @description Server-side proxy to OpenSky Network API.
 *              Bypasses CORS by making the request from the server.
 *              Query params: lamin, lomin, lamax, lomax (bounding box)
 */

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lamin = searchParams.get("lamin") || "30";
  const lomin = searchParams.get("lomin") || "7";
  const lamax = searchParams.get("lamax") || "38";
  const lomax = searchParams.get("lomax") || "12";

  try {
    const openSkyUrl = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

    const res = await fetch(openSkyUrl, {
      headers: { "User-Agent": "portfolio-app" },
      next: { revalidate: 30 }, // Cache for 30 seconds
    });

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
