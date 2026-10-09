import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  allowedDevOrigins: [
    'jet-president-nation-aged.trycloudflare.com',
    'https://jet-president-nation-aged.trycloudflare.com',
    'tigers-express-conversation-tide.trycloudflare.com',
    'https://tigers-express-conversation-tide.trycloudflare.com',
    'marking-filing-holmes-paintball.trycloudflare.com',
    'https://marking-filing-holmes-paintball.trycloudflare.com',
    'utilize-features-financing-apartments.trycloudflare.com',
    'https://utilize-features-financing-apartments.trycloudflare.com',
    'tissue-sufficient-marc-spanking.trycloudflare.com',
    'https://tissue-sufficient-marc-spanking.trycloudflare.com',
    'arrivals-spiritual-chronicle-instance.trycloudflare.com',
    'https://arrivals-spiritual-chronicle-instance.trycloudflare.com'
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
