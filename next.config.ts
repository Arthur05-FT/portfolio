import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/arthur-fullstack",
        destination: "/about",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/arthur-fullstack",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
