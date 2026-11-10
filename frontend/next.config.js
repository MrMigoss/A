/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['common'],
  experimental: {
    externalDir: true,
    serverComponentsExternalPackages: ['mongoose'] // <--- تأكد من وجود هذا السطر
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
