import Link from "next/link";
import { formatDate, getSortedBlogPages } from "@/lib/source";

export function BlogPosts() {
  const posts = getSortedBlogPages();

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.url}
          className="flex flex-col space-y-1 mb-4"
          href={post.url}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(String(post.data.date))}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.data.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
