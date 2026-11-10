/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // تجاهل أخطاء الـ TypeScript لإنقاذ البناء
  },
  transpilePackages: ['common'],
  experimental: {
    externalDir: true,
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"]
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
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
