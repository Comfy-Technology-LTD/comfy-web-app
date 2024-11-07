/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/comfy-web-app",
  output: "export",
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
  
};

export default nextConfig;
