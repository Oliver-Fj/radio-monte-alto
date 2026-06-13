
import type { NextConfig } from "next";

type NextConfigWithEslint = NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
};

const nextConfig: NextConfigWithEslint = {
  output: 'export',
  images: {
    unoptimized: true, 
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'sp.dattavolt.com' },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
