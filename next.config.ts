import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/expertise',
        destination: '/#expertise',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/qualifications',
        destination: '/#qualifications',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
