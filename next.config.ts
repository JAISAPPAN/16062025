import type { NextConfig } from 'next';

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;
