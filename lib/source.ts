import { blog as blogPosts } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import type { Locale } from "@/lib/locale";

export type BlogLanguage = "en" | "cn";

export const blog = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blogPosts, []),
  i18n: {
    languages: ["en", "cn"],
    defaultLanguage: "en",
    parser: "dot",
    hideLocale: "always",
    fallbackLanguage: "en",
  },
});

export type BlogPage = (typeof blog)["$inferPage"];

export function localeToBlogLanguage(locale: Locale): BlogLanguage {
  return locale === "zh" ? "cn" : "en";
}

export function getSortedBlogPages(locale: Locale) {
  return blog
    .getPages(localeToBlogLanguage(locale))
    .sort((a, b) => {
      const dateA = new Date(String(a.data.date)).getTime();
      const dateB = new Date(String(b.data.date)).getTime();
      return dateB - dateA;
    });
}

export function getBlogPage(slug: string, locale: Locale) {
  return blog.getPage([slug], localeToBlogLanguage(locale));
}

export function getAllBlogSlugs() {
  const slugs = new Set<string>();

  for (const page of blog.getPages("en")) {
    slugs.add(page.slugs[0]);
  }

  for (const page of blog.getPages("cn")) {
    slugs.add(page.slugs[0]);
  }

  return Array.from(slugs);
}

export function formatDate(date: string | Date, locale: Locale = "en") {
  const value =
    date instanceof Date
      ? date
      : new Date(date.includes("T") ? date : `${date}T00:00:00`);

  return value.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
