import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // `beforeFiles` runs ahead of filesystem and app-router matching, so this
      // wins over any `app/page.tsx`. The URL stays "/" — this is a rewrite,
      // not a redirect, so nothing bounces to /crate.html in the address bar.
      beforeFiles: [
        { source: "/", destination: "/crate.html" },
        { source: "/darkroom", destination: "/darkroom.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
