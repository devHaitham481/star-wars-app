const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  images: {
    domains: ["download.logo.wine", "static-mh.content.disney.io"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
