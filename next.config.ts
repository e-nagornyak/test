import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        protocol: "https",
        hostname: "**",
      },
      {
        // protocol: "https",
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  /* config options here */
}

export default nextConfig
