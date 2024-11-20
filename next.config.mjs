// next.config.mjs
export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Accept all domains
        pathname: "**", // Accept all paths
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
