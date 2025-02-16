import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'minutes90.store',
            port: '',
            pathname: '/uploads/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'minutes90.store',
            port: '',
            pathname: '/assets/**',
            search: '',
          },
        ],
      },
  
};

export default nextConfig;
