import { blog as blogPosts } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";

export const blog = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blogPosts, []),
});

export type BlogPage = (typeof blog)["$inferPage"];

export function getSortedBlogPages() {
  return blog.getPages().sort((a, b) => {
    const dateA = new Date(String(a.data.date)).getTime();
    const dateB = new Date(String(b.data.date)).getTime();
    return dateB - dateA;
  });
}

export function formatDate(date: string | Date) {
  const value =
    date instanceof Date
      ? date
      : new Date(date.includes("T") ? date : `${date}T00:00:00`);

  return value.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
