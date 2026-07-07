/**
 * @name CountryFlag.tsx
 * @description Detects the visitor's country via IP geolocation and displays
 *              the corresponding flag emoji in the bottom-left corner.
 *              Uses api.country.is (HTTPS, CORS-enabled, no key needed).
 */

"use client";

import { useEffect, useState } from "react";

/**
 * Converts a 2-letter country code (e.g. "FR") to its flag emoji.
 */
function countryCodeToFlag(code: string): string {
  const codePoints = code
    .toUpperCase()
    .split("")
    .map((char) => 0x1f1e6 + char.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

/** Map of common country codes to names */
const COUNTRY_NAMES: Record<string, string> = {
  IE: "Ireland", FR: "France", US: "United States", GB: "United Kingdom",
  DE: "Germany", ES: "Spain", IT: "Italy", PT: "Portugal", NL: "Netherlands",
  BE: "Belgium", CH: "Switzerland", AT: "Austria", SE: "Sweden", NO: "Norway",
  DK: "Denmark", FI: "Finland", PL: "Poland", CZ: "Czechia", CA: "Canada",
  AU: "Australia", JP: "Japan", IN: "India", BR: "Brazil", AE: "UAE",
  TN: "Tunisia", MA: "Morocco", DZ: "Algeria", EG: "Egypt", SA: "Saudi Arabia",
};

function CountryFlag() {
  const [flag, setFlag] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        // api.country.is - HTTPS, CORS-friendly, returns {ip, country}
        const res = await fetch("https://api.country.is");
        if (!res.ok) return;
        const data = await res.json();
        if (data.country) {
          setFlag(countryCodeToFlag(data.country));
          setCountry(COUNTRY_NAMES[data.country] || data.country);
        }
      } catch {
        // Silently fail
      }
    }
    fetchCountry();
  }, []);

  if (!flag) return null;

  return (
    <div
      className="pointer-events-auto fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-blue-9/70 px-3 py-2 backdrop-blur-sm transition-opacity duration-700"
      title={`Visiting from ${country}`}
    >
      <span className="text-2xl">{flag}</span>
      <span className="text-xs text-white-1/70">{country}</span>
    </div>
  );
}

export default CountryFlag;
