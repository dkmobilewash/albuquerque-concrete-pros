import type { NextConfig } from "next";

const CANONICAL_HOST = "www.albuquerqueconcretepro.com";
const APEX_HOST = "albuquerqueconcretepro.com";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  // Fully static marketing site: Cache Components is intentionally off so
  // `dynamicParams = false` can hard-404 any slug not in generateStaticParams.
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    const apex = [{ type: "host" as const, value: APEX_HOST }];
    return [
      // Apex → www, permanent (308), preserving path, trailing slash and query in one hop.
      { source: "/", has: apex, destination: `https://${CANONICAL_HOST}/`, permanent: true },
      { source: "/:path+/", has: apex, destination: `https://${CANONICAL_HOST}/:path+/`, permanent: true },
      { source: "/:path+", has: apex, destination: `https://${CANONICAL_HOST}/:path+`, permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
