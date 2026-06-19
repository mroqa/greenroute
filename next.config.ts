import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the sandbox preview origin to access dev resources (HMR, _next/*)
  // Without this, cross-origin requests from the preview cause HMR reload loops.
  allowedDevOrigins: [
    "21.0.5.131",
    "localhost",
    "127.0.0.1",
    "*.preview.z.ai",
    "*.chatglm.cn",
  ],
};

export default nextConfig;
