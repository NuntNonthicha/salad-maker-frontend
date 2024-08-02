/** @type {import('next').NextConfig} */
const nextConfig = {
  //Set Image from firebase
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  cssModules: true,
};

export default nextConfig;
