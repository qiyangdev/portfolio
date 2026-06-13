import type { Metadata } from "next";
import { BlogPosts } from "@/app/components/posts";
import { baseUrl } from "@/app/site";
import { getBlogMessages } from "@/lib/i18n";
import { getLocale, localeToHtmlLang } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = getBlogMessages(locale);
  const htmlLang = localeToHtmlLang(locale);

  return {
    title: messages.title,
    description: messages.description,
    openGraph: {
      title: messages.title,
      description: messages.description,
      locale: htmlLang === "zh-CN" ? "zh_CN" : "en_US",
      url: `${baseUrl}/blog`,
    },
    twitter: {
      title: messages.title,
      description: messages.description,
    },
  };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const messages = getBlogMessages(locale);

  return (
    <div className="home-hero text-center">
      <h1 className="home-hero__title font-bold tracking-tight text-foreground">
        {messages.title}
      </h1>
      <BlogPosts />
    </div>
  );
}
