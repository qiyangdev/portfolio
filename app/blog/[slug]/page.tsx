import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/components/mdx";
import { BlogPostContent } from "@/app/components/blog-post-content";
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
    <>
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
      <BlogPostContent
        title={title}
        date={formatDate(date, locale)}
        copyright={formatBlogCopyright(locale, author, copyrightYear)}
        locale={locale}
      >
        <MDX components={mdxComponents} />
      </BlogPostContent>
    </>
  );
}
