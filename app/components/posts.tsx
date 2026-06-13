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
          <p className="text-neutral-100 tracking-tight underline underline-offset-2 decoration-current/35">
            {post.data.title}
          </p>
          <p className="text-sm text-neutral-400">
            {formatDate(String(post.data.date))}
          </p>
        </Link>
      ))}
    </div>
  );
}
