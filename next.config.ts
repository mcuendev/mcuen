import type { NextConfig } from "next";

const CONVEX_HOSTNAME = process.env.NEXT_PUBLIC_CONVEX_HOSTNAME;

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: CONVEX_HOSTNAME || "utmost-shrimp-301.convex.cloud",
        pathname: "/api/storage/**",
      },
    ],
  },
};

export default nextConfig;
