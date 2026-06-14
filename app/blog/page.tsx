import type { Metadata } from "next";
import { BlogPageContent } from "@/app/components/blog-page-content";
import { baseUrl } from "@/app/site";
import { getBlogMessages } from "@/lib/i18n";
import { getShareMetadata } from "@/lib/metadata";
import { getLocale, localeToHtmlLang } from "@/lib/locale";
import { getSortedBlogPages } from "@/lib/source";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = getBlogMessages(locale);
  const htmlLang = localeToHtmlLang(locale);

  return {
    title: messages.title,
    description: messages.description,
    ...getShareMetadata({
      title: messages.title,
      description: messages.description,
      url: `${baseUrl}/blog`,
      locale: htmlLang === "zh-CN" ? "zh_CN" : "en_US",
      imageTitle: messages.title,
    }),
  };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const messages = getBlogMessages(locale);
  const posts = getSortedBlogPages(locale).map((post) => ({
    url: post.url,
    title: String(post.data.title),
  }));

  return (
    <BlogPageContent
      title={messages.title}
      posts={posts}
      locale={locale}
    />
  );
}
