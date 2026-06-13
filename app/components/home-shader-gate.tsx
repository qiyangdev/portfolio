"use client";

import { usePathname } from "next/navigation";
import { HomeShaderBackground } from "@/app/components/home-shader-background";

export function HomeShaderGate() {
  const pathname = usePathname();
  const showBackground = pathname === "/" || pathname.startsWith("/blog");

  if (!showBackground) {
    return null;
  }

  return <HomeShaderBackground />;
}
