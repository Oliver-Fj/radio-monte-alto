import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/radio-monte-alto',
  assetPrefix: '/radio-monte-alto/',
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;