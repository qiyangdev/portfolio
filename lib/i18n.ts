import type { Locale } from "@/lib/locale";

export type HomeMessages = {
  name: string;
  description: string;
  bioIntro: string;
  bioBetween1: string;
  bioBetween2: string;
  bioSuffix: string;
};

const homeMessages: Record<Locale, HomeMessages> = {
  en: {
    name: "Qiyang",
    description:
      "Software developer building products with SwiftUI, Expo, and Next.js — exploring the goals I pursue as a software engineer.",
    bioIntro: "Software developer building products with ",
    bioBetween1: ", ",
    bioBetween2: ", and ",
    bioSuffix: " — exploring the goals I pursue as a software engineer.",
  },
  zh: {
    name: "启阳",
    description:
      "我是一名软件工程师，用 SwiftUI、Expo 和 Next.js 构建产品，并持续探索自己在工程路上的目标与方向。",
    bioIntro: "我是一名软件工程师，用 ",
    bioBetween1: "、",
    bioBetween2: " 和 ",
    bioSuffix: " 构建产品，并持续探索自己在工程路上的目标与方向。",
  },
};

export function getHomeMessages(locale: Locale): HomeMessages {
  return homeMessages[locale];
}
