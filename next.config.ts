import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.eletrosystemti.com.br',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
