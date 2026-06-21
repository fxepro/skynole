import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — unrelated lockfiles exist higher up the tree.
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
