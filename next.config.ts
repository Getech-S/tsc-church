import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Turbopack choosing the wrong workspace root when multiple lockfiles exist.
  // (e.g. it may incorrectly pick C:\Users\user instead of this project folder)

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    root: process.cwd(),
  },
  // Enforce strict security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents your site from being embedded in iframes (clickjacking protection)
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents browser from guessing content types
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Protects user privacy
          },
        ],
      },
    ];
  },
  // Good for security and performance
  poweredByHeader: false, // Hides "X-Powered-By: Next.js" (don't advertise your stack to hackers)
  reactStrictMode: true,
};

export default nextConfig;