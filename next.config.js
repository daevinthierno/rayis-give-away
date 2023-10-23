const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
});

module.exports = nextConfig;
