import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shabihaz.com', // Yahan apna r2.dev wala hostname likhein
      },
    ],

    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
