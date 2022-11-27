/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/images',
  },
  assetPrefix: './',
};

export default nextConfig;