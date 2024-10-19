/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co", pathname: "**", port: "", protocol: "https" },
    ],
  },
};

export default nextConfig;
