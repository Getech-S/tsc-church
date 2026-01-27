/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. LINTING & TYPESCRIPT
  // (We use eslint.config.mjs for linting now, but keeping this doesn't hurt)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. IMAGES
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

  // 3. SECURITY HEADERS
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // 4. 👇 THE FIX FOR MULTIPLE LOCKFILES 👇
  // This explicitly tells Next.js: "The root is HERE, not in C:/Users/user"
  turbopack: {
    root: process.cwd(),
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;