import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@snugged/config", "@snugged/types", "@snugged/ui", "@snugged/analytics"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "**.r2.dev"
      },
      {
        protocol: "https",
        hostname: "snugged.shop"
      }
    ]
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;
