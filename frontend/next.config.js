/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['common'],
  experimental: {
    externalDir: true
  },
  images: {
    remotePatterns: [
      {
        hostname: "unogame.site",
        pathname: "/images/**",
        protocol: "https"
      }
    ]
  },
  reactStrictMode: false
}

const withNextIntl = require("next-intl/plugin")()

module.exports = withNextIntl(nextConfig)
