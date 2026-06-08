import type { Metadata } from "next";
import { BlogPosts } from "@/app/components/posts";
import { siteConfig } from "@/app/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing by ${siteConfig.name} on engineering, tools, and ideas.`,
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
