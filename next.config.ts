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
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
}

export default nextConfig