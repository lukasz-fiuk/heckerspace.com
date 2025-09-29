/** @type {import('next').NextConfig} */

const withPWA =
  process.env.NODE_ENV === "production"
    ? require("next-pwa")({ dest: "public" })
    : (x) => x;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  compress: true,
  images: {
    domains: [
      "media.graphassets.com",
      "eu-central-1-shared-euc1-02.graphassets.com",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Turn off webpack's "watch" mode
    config.watch = false;

    // Import SVGs as regular components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    // Use Preact - note, preact is only enabled for production builds (`next build`)
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    }

    return config;
  },
};

module.exports = withPWA(nextConfig);
