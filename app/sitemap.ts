import { baseUrl } from "@/app/site";
import { getSortedBlogPages } from "@/lib/source";

export default async function sitemap() {
  const posts = getSortedBlogPages().map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: String(post.data.date),
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
