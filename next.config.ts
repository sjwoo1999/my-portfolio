import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 경고 무시
  },
};


export default nextConfig;
