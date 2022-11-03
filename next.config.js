/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    output: "standalone",
  },
}

module.exports = {
  nextConfig,
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
}