import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
