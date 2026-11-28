import type { NextConfig } from 'next'
import { readFileSync } from "node:fs";
import { join } from "node:path";


const packageJson = JSON.parse(
  readFileSync(join(process.cwd(), "package.json"), "utf8")
);
const version = packageJson.version;

if (!version) {
  throw new Error("Application version not found in package.json");
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lumise.com" },
      { protocol: "https", hostname: "s3.envato.com" },
      { protocol: "https", hostname: "market-resized.envatousercontent.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
}

export default nextConfig