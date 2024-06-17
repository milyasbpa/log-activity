/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/staging-api/:path*",
        destination: "https://stage2.dsc.biz.id/rest/api/v1/pwa/:path*",
      },
    ];
  },
};

export default nextConfig;
