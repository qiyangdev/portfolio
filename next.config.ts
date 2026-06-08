import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const config: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  serverExternalPackages: ["@takumi-rs/core", "@takumi-rs/wasm"],
};

const withMDX = createMDX();

export default withMDX(config);
