import type { Locale } from "@/lib/locale";

export type HomeMessages = {
  name: string;
  description: string;
  bioPrefix: string;
  bioRole: string;
  bioMid: string;
  bioBetween1: string;
  bioBetween2: string;
  bioSuffix: string;
  bioBlogBefore: string;
  bioBlogLabel: string;
  bioBlogAfter: string;
};

export type BlogMessages = {
  title: string;
  description: string;
  introPrefix: string;
  introHomeBefore: string;
  introHomeLabel: string;
  introHomeAfter: string;
  footerHomeLabel: string;
  footerBlogLabel: string;
};

export type NotFoundMessages = {
  label: string;
  heading: string;
  descriptionPrefix: string;
  homeBefore: string;
  homeLabel: string;
  homeAfter: string;
};

const homeMessages: Record<Locale, HomeMessages> = {
  en: {
    name: "Qiyang",
    description:
      "Software developer building products with SwiftUI, Expo, and Next.js — exploring the goals I pursue as a software engineer. Writing on the blog about engineering, tools, and ideas.",
    bioPrefix: "",
    bioRole: "Software developer",
    bioMid: " building products with ",
    bioBetween1: ", ",
    bioBetween2: ", and ",
    bioSuffix: " — exploring the goals I pursue as a software engineer",
    bioBlogBefore: ". I sometimes write about engineering on the ",
    bioBlogLabel: "blog",
    bioBlogAfter: ".",
  },
  zh: {
    name: "启阳",
    description:
      "我是一名软件工程师，用 SwiftUI、Expo 和 Next.js 构建产品，并持续探索自己在工程路上的目标与方向，在博客里记录工程、工具与想法。",
    bioPrefix: "我是一名",
    bioRole: "软件工程师",
    bioMid: "，用 ",
    bioBetween1: "、",
    bioBetween2: " 和 ",
    bioSuffix: " 构建产品，并持续探索自己在工程路上的目标与方向",
    bioBlogBefore: "，有时也会把想法写在",
    bioBlogLabel: "博客",
    bioBlogAfter: "里。",
  },
};

const blogMessages: Record<Locale, BlogMessages> = {
  en: {
    title: "Blog",
    description:
      "Writing by Qiyang on engineering, tools, and ideas.",
    introPrefix:
      "Writing on engineering, tools, and ideas — occasional notes from a software developer",
    introHomeBefore: ". More about me on the ",
    introHomeLabel: "homepage",
    introHomeAfter: ".",
    footerHomeLabel: "Home",
    footerBlogLabel: "Blog",
  },
  zh: {
    title: "博客",
    description: "启阳关于工程、工具与想法的文章。",
    introPrefix: "关于工程、工具与想法的文章，记录一名软件工程师的思考",
    introHomeBefore: "。个人介绍见",
    introHomeLabel: "首页",
    introHomeAfter: "。",
    footerHomeLabel: "首页",
    footerBlogLabel: "博客",
  },
};

const notFoundMessages: Record<Locale, NotFoundMessages> = {
  en: {
    label: "404",
    heading: "Page not found",
    descriptionPrefix: "The page you're looking for doesn't exist",
    homeBefore: ". Return to the ",
    homeLabel: "homepage",
    homeAfter: ".",
  },
  zh: {
    label: "404",
    heading: "页面未找到",
    descriptionPrefix: "你访问的页面不存在",
    homeBefore: "，请返回",
    homeLabel: "首页",
    homeAfter: "。",
  },
};

export function getHomeMessages(locale: Locale): HomeMessages {
  return homeMessages[locale];
}

export function getBlogMessages(locale: Locale): BlogMessages {
  return blogMessages[locale];
}

export function getNotFoundMessages(locale: Locale): NotFoundMessages {
  return notFoundMessages[locale];
}

export function formatBlogCopyright(
  locale: Locale,
  author: string,
  year: number,
): string {
  if (locale === "zh") {
    return `© ${year} ${author}。保留所有权利，转载请注明出处。`;
  }

  return `© ${year} ${author}. All rights reserved. Please cite the source when republishing.`;
}
