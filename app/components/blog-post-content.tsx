"use client";

import Link from "next/link";
import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import type { Locale } from "@/lib/locale";

const inlineLinkClassName =
  "font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60";

type BlogPostContentProps = {
  title: string;
  date: string;
  copyright: string;
  homeLabel: string;
  blogLabel: string;
  locale: Locale;
  children: React.ReactNode;
};

export function BlogPostContent({
  title,
  date,
  copyright,
  homeLabel,
  blogLabel,
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
          className={`home-hero__bio prose text-left font-normal ${
            locale === "zh" ? "leading-[1.85]" : "leading-normal"
          }`}
        >
          {children}
        </article>
      </HomeMotionItem>
      <HomeMotionItem>
        <footer className="mt-10 text-center text-sm leading-relaxed text-neutral-400">
          <p>{copyright}</p>
          <p className="mt-3">
            <Link href="/" className={inlineLinkClassName}>
              {homeLabel}
            </Link>
            <span aria-hidden className="mx-2 text-neutral-500">
              ·
            </span>
            <Link href="/blog" className={inlineLinkClassName}>
              {blogLabel}
            </Link>
          </p>
        </footer>
      </HomeMotionItem>
    </HomeMotion>
  );
}
