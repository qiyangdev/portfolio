"use client";

import Link from "next/link";
import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import type { Locale } from "@/lib/locale";

type BlogPageContentProps = {
  title: string;
  posts: Array<{ url: string; title: string }>;
  locale: Locale;
};

export function BlogPageContent({
  title,
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
      {posts.map((post, index) => (
        <HomeMotionItem
          key={post.url}
          className={`home-hero__bio mx-auto w-full max-w-2xl font-normal text-foreground ${
            index > 0 ? "mt-3" : ""
          } ${locale === "zh" ? "leading-[1.85]" : "leading-normal"}`}
        >
          <Link
            className="font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60"
            href={post.url}
          >
            {post.title}
          </Link>
        </HomeMotionItem>
      ))}
    </HomeMotion>
  );
}
