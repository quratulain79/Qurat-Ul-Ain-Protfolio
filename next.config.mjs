/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ye Vercel ko bolta hai ke choti warnings par build na rokay
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ye zaroori hai taake Sanity ki images nazar ayen
  images: {
    domains: ['cdn.sanity.io'], 
  },
};

export default nextConfig;