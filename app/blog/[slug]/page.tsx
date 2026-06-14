import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/components/mdx";
import { baseUrl, siteConfig } from "@/app/site";
import { formatDate, getAllBlogSlugs, getBlogPage } from "@/lib/source";
import { formatBlogCopyright } from "@/lib/i18n";
import { getOgImageUrl, getShareMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/locale";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getBlogPage(slug, locale);

  if (!page) {
    return {};
  }

  const title = String(page.data.title);
  const description = String(page.data.description);

  return {
    title,
    description,
    ...getShareMetadata({
      title,
      description,
      url: `${baseUrl}${page.url}`,
      type: "article",
      publishedTime: String(page.data.date),
      imageTitle: title,
    }),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getBlogPage(slug, locale);

  if (!page) {
    notFound();
  }
  const MDX = page.data.body;
  const title = String(page.data.title);
  const description = String(page.data.description);
  const date = String(page.data.date);
  const author = String(page.data.author ?? siteConfig.author);
  const copyrightYear = new Date(
    date.includes("T") ? date : `${date}T00:00:00`,
  ).getFullYear();

  return (
    <section className="home-hero text-center">
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
            image: getOgImageUrl(title),
            url: `${baseUrl}${page.url}`,
            author: {
              "@type": "Person",
              name: author,
            },
          }),
        }}
      />
      <h1 className="home-hero__title font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="home-hero__bio mb-8 text-neutral-400">
        {formatDate(date, locale)}
      </p>
      <article
        className={`home-hero__bio prose prose-invert mx-auto max-w-2xl text-left font-normal ${
          locale === "zh" ? "leading-[1.85]" : "leading-normal"
        }`}
      >
        <MDX components={mdxComponents} />
      </article>
      <footer className="home-hero__bio mx-auto mt-10 max-w-2xl text-center text-neutral-400">
        {formatBlogCopyright(locale, author, copyrightYear)}
      </footer>
    </section>
  );
}
