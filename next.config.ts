import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/DISCO_QUESTIONS',
  assetPrefix: '/DISCO_QUESTIONS/',
};

export default nextConfig;
