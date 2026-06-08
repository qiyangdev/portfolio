import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/components/mdx";
import { baseUrl, siteConfig } from "@/app/site";
import { blog, formatDate } from "@/lib/source";

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    return {};
  }

  const title = String(page.data.title);
  const description = String(page.data.description);
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: String(page.data.date),
      url: `${baseUrl}${page.url}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const title = String(page.data.title);
  const description = String(page.data.description);
  const date = String(page.data.date);
  const author = String(page.data.author ?? siteConfig.author);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: date,
            dateModified: date,
            description,
            image: `${baseUrl}/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}${page.url}`,
            author: {
              "@type": "Person",
              name: author,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(date)}
        </p>
      </div>
      <article className="prose dark:prose-invert">
        <MDX components={mdxComponents} />
      </article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 mt-8 text-sm leading-none text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <ArrowLeft className="size-[1em] shrink-0" strokeWidth={1.5} aria-hidden />
        Back to blog
      </Link>
    </section>
  );
}
