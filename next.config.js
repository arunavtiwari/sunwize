/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      // Canonical host is https://www.sunwize.co.in (see metadataBase in
      // src/app/layout.tsx and siteUrl in next-sitemap.config.js). Without
      // this, the apex domain served the exact same page as a 200 OK
      // instead of redirecting, which is why Google was indexing both
      // sunwize.co.in and www.sunwize.co.in as separate URLs.
      {
        source: "/:path*",
        has: [{ type: "host", value: "sunwize.co.in" }],
        destination: "https://www.sunwize.co.in/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
