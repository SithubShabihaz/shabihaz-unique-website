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
  // 👇 YAHAN NAYA CODE ADD KIYA HAI (JS Execution Time kam karne ke liye)
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },
};

module.exports = nextConfig;
