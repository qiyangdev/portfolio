"use client";

import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import type { Locale } from "@/lib/locale";

type BlogPostContentProps = {
  title: string;
  date: string;
  copyright: string;
  locale: Locale;
  children: React.ReactNode;
};

export function BlogPostContent({
  title,
  date,
  copyright,
  locale,
  children,
}: BlogPostContentProps) {
  return (
    <HomeMotion className="home-hero text-center">
      <HomeMotionItem>
        <h1 className="home-hero__title font-bold tracking-tight text-foreground">
          {title}
        </h1>
      </HomeMotionItem>
      <HomeMotionItem>
        <p className="home-hero__bio mb-8 text-neutral-400">{date}</p>
      </HomeMotionItem>
      <HomeMotionItem>
        <article
          className={`home-hero__bio prose prose-invert mx-auto max-w-2xl text-left font-normal ${
            locale === "zh" ? "leading-[1.85]" : "leading-normal"
          }`}
        >
          {children}
        </article>
      </HomeMotionItem>
      <HomeMotionItem>
        <footer className="home-hero__bio mx-auto mt-10 max-w-2xl text-center text-neutral-400">
          {copyright}
        </footer>
      </HomeMotionItem>
    </HomeMotion>
  );
}
