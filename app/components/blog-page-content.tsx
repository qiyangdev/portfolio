"use client";

import Link from "next/link";
import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import type { Locale } from "@/lib/locale";

const inlineLinkClassName =
  "font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60";

type BlogPageContentProps = {
  title: string;
  introPrefix: string;
  introHomeBefore: string;
  introHomeLabel: string;
  introHomeAfter: string;
  posts: Array<{ url: string; title: string }>;
  locale: Locale;
};

export function BlogPageContent({
  title,
  introPrefix,
  introHomeBefore,
  introHomeLabel,
  introHomeAfter,
  posts,
  locale,
}: BlogPageContentProps) {
  return (
    <HomeMotion className="home-hero text-center">
      <HomeMotionItem>
        <h1 className="home-hero__title font-bold tracking-tight text-foreground">
          {title}
        </h1>
      </HomeMotionItem>
      <HomeMotionItem>
        <div
          className={`home-hero__bio mb-8 font-normal text-foreground ${
            locale === "zh" ? "leading-[1.85]" : "leading-normal"
          }`}
        >
          {introPrefix}
          {introHomeBefore}
          <Link href="/" className={inlineLinkClassName}>
            {introHomeLabel}
          </Link>
          {introHomeAfter}
        </div>
      </HomeMotionItem>
      {posts.map((post, index) => (
        <HomeMotionItem
          key={post.url}
          className={`home-hero__bio font-normal text-foreground ${
            index > 0 ? "mt-3" : ""
          } ${locale === "zh" ? "leading-[1.85]" : "leading-normal"}`}
        >
          <Link className={inlineLinkClassName} href={post.url}>
            {post.title}
          </Link>
        </HomeMotionItem>
      ))}
    </HomeMotion>
  );
}
