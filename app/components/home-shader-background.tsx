"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function HomeShaderBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <MeshGradient
        colors={["#0a0a0a", "#1a1a2e", "#16213e", "#12121a"]}
        distortion={0.85}
        swirl={0.35}
        speed={0.18}
        grainOverlay={0.04}
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
