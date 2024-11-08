/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  assetPrefix: process.env.URL ? process.env.URL : undefined,
  // output: "export",
  reactStrictMode: true,
  
};

export default nextConfig;
