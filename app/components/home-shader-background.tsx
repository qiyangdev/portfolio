"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";

const shaderColors = ["#0a0a0a", "#1a1a2e", "#16213e", "#12121a"] as const;

const staticBackgroundStyle = {
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 35%, #16213e 65%, #12121a 100%)",
} as const;

export function HomeShaderBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {reduceMotion ? (
        <div className="h-full w-full" style={staticBackgroundStyle} />
      ) : (
        <MeshGradient
          colors={[...shaderColors]}
          distortion={0.85}
          swirl={0.35}
          speed={0.18}
          grainOverlay={0.04}
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
