/** @type {import('next').NextConfig} */
//q: configure image source in NextJS config
//a: https://nextjs.org/docs/api-reference/next.config.js/configuring-image-sizes

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol:"https",
        hostname:"img.clerk.com",

      },
    ],
  },
};

module.exports = nextConfig;
