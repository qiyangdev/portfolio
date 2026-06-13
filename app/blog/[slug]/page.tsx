import type { Metadata } from "next";
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
      <div className="text-center">
        <h1 className="title font-semibold text-2xl tracking-tighter">{title}</h1>
        <div className="flex justify-center items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-400">
            {formatDate(date)}
          </p>
        </div>
      </div>
      <article className="prose prose-invert text-left">
        <MDX components={mdxComponents} />
      </article>
    </section>
  );
}
