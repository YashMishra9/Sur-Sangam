import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Backgrounds are local files under public/bg — no remote patterns needed.
    // Cover art is rendered by the YouTube iframe itself (see gotchas: we never
    // download/re-host YouTube thumbnails), so no remote image domains either.
  },
};

export default nextConfig;
