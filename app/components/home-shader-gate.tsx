"use client";

import { usePathname } from "next/navigation";
import { HomeShaderBackground } from "@/app/components/home-shader-background";

export function HomeShaderGate() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return <HomeShaderBackground />;
}
