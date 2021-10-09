const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isDev = process.env.NODE_ENV === "development";

const pwa = {
  disable: isDev,
  dest: "public",
  runtimeCaching,
};

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  pwa,
  reactStrictMode: true,
};

const plugins = [[withBundleAnalyzer], [withPWA]];

module.exports = withPlugins(plugins, nextConfig);
