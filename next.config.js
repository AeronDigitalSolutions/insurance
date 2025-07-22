/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // other settings
};

// In next.config.js
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
