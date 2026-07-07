import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Only use static export for production (GitHub Pages).
  // In dev, we need API routes for the OpenSky proxy.
  ...(isProd ? { output: "export" } : {}),
};

export default nextConfig;
