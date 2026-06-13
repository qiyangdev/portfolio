import Link from "next/link";
import { getSortedBlogPages } from "@/lib/source";
import { getLocale } from "@/lib/locale";

export async function BlogPosts() {
  const locale = await getLocale();
  const posts = getSortedBlogPages(locale);

  return (
    <ul
      className={`home-hero__bio mx-auto flex w-full max-w-2xl flex-col items-center gap-3 font-normal text-foreground ${
        locale === "zh" ? "leading-[1.85]" : "leading-normal"
      }`}
    >
      {posts.map((post) => (
        <li key={post.url}>
          <Link
            className="font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60"
            href={post.url}
          >
            {post.data.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
