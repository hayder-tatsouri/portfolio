/**
 * @name FlyingPlane.tsx
 * @description Shows animated planes with REAL flight data.
 *              Uses /api/flights (server-side proxy to OpenSky) to avoid CORS.
 *              Detects visitor country to pick the region.
 */

"use client";

import { useEffect, useState } from "react";

type FlightData = {
  callsign: string;
  originCountry: string;
  altitude: number | null;
  velocity: number | null;
  heading: number | null;
};

type BBox = { lamin: number; lomin: number; lamax: number; lomax: number };

/** Country code to bounding box */
const COUNTRY_BBOX: Record<string, BBox> = {
  TN: { lamin: 30, lomin: 7, lamax: 38, lomax: 12 },
  DZ: { lamin: 19, lomin: -9, lamax: 37, lomax: 12 },
  MA: { lamin: 27, lomin: -13, lamax: 36, lomax: -1 },
  LY: { lamin: 19, lomin: 9, lamax: 34, lomax: 26 },
  EG: { lamin: 22, lomin: 25, lamax: 32, lomax: 37 },
  IE: { lamin: 51, lomin: -11, lamax: 56, lomax: -5 },
  GB: { lamin: 49, lomin: -8, lamax: 59, lomax: 2 },
  FR: { lamin: 41, lomin: -5, lamax: 51, lomax: 10 },
  DE: { lamin: 47, lomin: 5, lamax: 55, lomax: 16 },
  ES: { lamin: 36, lomin: -10, lamax: 44, lomax: 5 },
  IT: { lamin: 36, lomin: 6, lamax: 47, lomax: 19 },
  PT: { lamin: 36, lomin: -10, lamax: 42, lomax: -6 },
  NL: { lamin: 50, lomin: 3, lamax: 54, lomax: 8 },
  BE: { lamin: 49, lomin: 2, lamax: 52, lomax: 7 },
  CH: { lamin: 45, lomin: 5, lamax: 48, lomax: 11 },
  AT: { lamin: 46, lomin: 9, lamax: 49, lomax: 17 },
  PL: { lamin: 49, lomin: 14, lamax: 55, lomax: 25 },
  SE: { lamin: 55, lomin: 10, lamax: 69, lomax: 25 },
  NO: { lamin: 57, lomin: 4, lamax: 71, lomax: 32 },
  DK: { lamin: 54, lomin: 7, lamax: 58, lomax: 16 },
  FI: { lamin: 59, lomin: 19, lamax: 70, lomax: 32 },
  CZ: { lamin: 48, lomin: 12, lamax: 51, lomax: 19 },
  AE: { lamin: 22, lomin: 51, lamax: 27, lomax: 57 },
  SA: { lamin: 16, lomin: 34, lamax: 33, lomax: 56 },
  TR: { lamin: 35, lomin: 25, lamax: 42, lomax: 45 },
  US: { lamin: 25, lomin: -125, lamax: 50, lomax: -65 },
  CA: { lamin: 42, lomin: -141, lamax: 60, lomax: -52 },
  BR: { lamin: -34, lomin: -74, lamax: 6, lomax: -34 },
  IN: { lamin: 6, lomin: 67, lamax: 36, lomax: 98 },
  JP: { lamin: 30, lomin: 128, lamax: 46, lomax: 146 },
  AU: { lamin: -44, lomin: 112, lamax: -10, lomax: 155 },
};

const DEFAULT_BBOX: BBox = { lamin: 30, lomin: 7, lamax: 38, lomax: 12 };

/** Fallback: real-ish flights shown while API loads or if it fails */
const FALLBACK_FLIGHTS: FlightData[] = [
  { callsign: "TAR720", originCountry: "Tunisia", altitude: 10668, velocity: 230, heading: 45 },
  { callsign: "TUI4NF", originCountry: "Tunisia", altitude: 11278, velocity: 240, heading: 320 },
  { callsign: "NVR101", originCountry: "Tunisia", altitude: 9144, velocity: 210, heading: 85 },
  { callsign: "AFR962", originCountry: "France", altitude: 12192, velocity: 250, heading: 190 },
  { callsign: "THY738", originCountry: "Turkey", altitude: 10000, velocity: 225, heading: 270 },
];

/** Available plane SVG files */
const PLANE_SVGS = [
  "/img/planes/plane3__.svg",
  "/img/planes/plane.svg",
  "/img/planes/plane2.svg",
  "/img/planes/plane3__.svg",
];

function isEastbound(heading: number | null): boolean {
  if (heading === null) return true;
  return heading >= 0 && heading < 180;
}

function FlyingPlane() {
  // Start with fallback so planes are visible immediately
  const [flights, setFlights] = useState<FlightData[]>(FALLBACK_FLIGHTS);

  useEffect(() => {
    async function init() {
      // 1. Detect visitor country
      let countryCode = "TN";
      try {
        const geoRes = await fetch("https://api.country.is");
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.country) countryCode = geoData.country;
        }
      } catch {
        // Use default
      }

      // 2. Get bounding box
      const bbox = COUNTRY_BBOX[countryCode] || DEFAULT_BBOX;

      // 3. Fetch real flights via our server-side proxy (no CORS issues)
      try {
        const res = await fetch(
          `/api/flights?lamin=${bbox.lamin}&lomin=${bbox.lomin}&lamax=${bbox.lamax}&lomax=${bbox.lomax}`
        );
        if (!res.ok) throw new Error("API error");

        const data = await res.json();
        if (!data.states || data.states.length === 0) throw new Error("empty");
        const parsed: FlightData[] = data.states
          .filter((s: unknown[]) => s[1] && String(s[1]).trim() !== "")
          .map((s: unknown[]) => ({
            callsign: String(s[1]).trim(),
            originCountry: String(s[2]),
            altitude: s[7] as number | null,
            velocity: s[9] as number | null,
            heading: s[10] as number | null,
          }));

        // Pick up to 5 diverse flights (mix of east/west)
        const east = parsed.filter((f) => isEastbound(f.heading));
        const west = parsed.filter((f) => !isEastbound(f.heading));

        const selected: FlightData[] = [];
        const pick = (arr: FlightData[], n: number,max: number) => {
          const step = Math.max(1, Math.floor(arr.length / n));
          for (let i = 0; i < arr.length && selected.length < max; i += step)
            selected.push(arr[i]);
        };
        pick(east, 6,10);
        pick(west, 4,10 );

        setFlights(selected.slice(0, 10));
      } catch {
        // Keep fallback data (already set as initial state)
        // Planes are already visible from the initial render
      }
    }

    init();
  }, []);

  if (flights.length === 0) return null;

  const tracks = flights.map((flight, i) => {
    const eastbound = isEastbound(flight.heading);
    const topPct = 10 + (i * 25) / Math.max(flights.length - 1, 1);
    const duration = flight.velocity
      ? Math.max(12, 28 - flight.velocity / 40) + i * 2
      : 18 + i * 2;
    const size = flight.altitude && flight.altitude > 10000 ? 60 : flight.altitude && flight.altitude > 7000 ? 70 : 80;
    const opacity = flight.altitude && flight.altitude > 10000 ? 0.55 : flight.altitude && flight.altitude > 7000 ? 0.65 : 0.8;
    const delay = -(i * 4);

    return { flight, eastbound, topPct, duration, size, opacity, delay };
  });

  return (
    <div className="planes-layer">
      {tracks.map(({ flight, eastbound, topPct, duration, size, opacity, delay }, i) => (
        <div
          key={flight.callsign + i}
          className="plane-track"
          style={{ top: `${topPct}%` }}
        >
          <div
            className="plane-item"
            style={{
              opacity,
              animation: `${eastbound ? "flyRight" : "flyLeft"} ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PLANE_SVGS[i % PLANE_SVGS.length]}
              alt={flight.callsign}
              width={size}
              height={size * 0.35}
              className="plane-svg"
              style={{ transform: eastbound ? "none" : "scaleX(-1)" }}
              draggable={false}
            />
            <div className="plane-label">{flight.callsign}</div>
            <div className="plane-tooltip">
              <span className="plane-tooltip-callsign">{flight.callsign}</span>
              <span className="plane-tooltip-detail">{flight.originCountry}</span>
              {flight.altitude && (
                <span className="plane-tooltip-detail">
                  Alt: {Math.round(flight.altitude).toLocaleString()}m
                </span>
              )}
              {flight.velocity && (
                <span className="plane-tooltip-detail">
                  Speed: {Math.round(flight.velocity)} m/s
                </span>
              )}
              {flight.heading !== null && (
                <span className="plane-tooltip-detail">
                  Heading: {Math.round(flight.heading)}°
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlyingPlane;
