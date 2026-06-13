import type { Metadata } from "next";
import Image from "next/image";
import { Noto_Serif_SC, Source_Serif_4 } from "next/font/google";
import { TechLink } from "@/app/components/tech-link";
import { baseUrl } from "@/app/site";
import { getHomeMessages } from "@/lib/i18n";
import { getLocale, localeToHtmlLang } from "@/lib/locale";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-serif",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-serif-sc",
});

const techLinks = {
  swiftui: "https://developer.apple.com/swiftui/",
  expo: "https://expo.dev/",
  nextjs: "https://nextjs.org/",
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = getHomeMessages(locale);
  const htmlLang = localeToHtmlLang(locale);

  return {
    title: messages.name,
    description: messages.description,
    openGraph: {
      title: messages.name,
      description: messages.description,
      locale: htmlLang === "zh-CN" ? "zh_CN" : "en_US",
      url: baseUrl,
    },
    twitter: {
      title: messages.name,
      description: messages.description,
    },
  };
}

export default async function Home() {
  const locale = await getLocale();
  const messages = getHomeMessages(locale);

  return (
    <section
      className={`${sourceSerif.variable} ${notoSerifSC.variable} relative z-10 font-home-serif text-center text-foreground`}
    >
      <Image
        src="/avatar.png"
        alt={messages.name}
        width={72}
        height={72}
        className="mx-auto mb-4 rounded-full"
        priority
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-normal text-foreground">
        {messages.name}
      </h1>
      <div
        className={`mb-4 text-base text-foreground ${
          locale === "zh" ? "leading-[1.85]" : "leading-normal"
        }`}
      >
        {messages.bioIntro}
        <TechLink href={techLinks.swiftui} icon="/swift.svg">
          SwiftUI
        </TechLink>
        {messages.bioBetween1}
        <TechLink href={techLinks.expo} icon="/expo.svg">
          Expo
        </TechLink>
        {messages.bioBetween2}
        <TechLink href={techLinks.nextjs} icon="/nextdotjs.svg">
          Next.js
        </TechLink>
        {messages.bioSuffix}
      </div>
    </section>
  );
}
