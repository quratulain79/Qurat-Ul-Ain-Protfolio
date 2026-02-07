/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Yahan humne wo saare links allow kar diye hain jahan se images aa sakti hain
    domains: [
      'cdn.sanity.io', 
      'images.unsplash.com', 
      'assets.aceternity.com',
      'ui.aceternity.com',
      'pbs.twimg.com',
      'upload.wikimedia.org' 
    ],
  },
};

export default nextConfig;