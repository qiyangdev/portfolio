import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC, Source_Serif_4 } from "next/font/google";
import Footer from "@/app/components/footer";
import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import { TechLink } from "@/app/components/tech-link";
import { baseUrl } from "@/app/site";
import { getHomeMessages } from "@/lib/i18n";
import { getShareMetadata } from "@/lib/metadata";
import { getLocale, localeToHtmlLang } from "@/lib/locale";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-serif",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    ...getShareMetadata({
      title: messages.name,
      description: messages.description,
      url: baseUrl,
      locale: htmlLang === "zh-CN" ? "zh_CN" : "en_US",
    }),
  };
}

export default async function Home() {
  const locale = await getLocale();
  const messages = getHomeMessages(locale);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center text-center">
      <HomeMotion
        className={`${sourceSerif.variable} ${notoSerifSC.variable} home-hero relative z-10 font-home-serif text-foreground`}
      >
        <HomeMotionItem>
          <Image
            src="/avatar.png"
            alt={messages.name}
            width={80}
            height={80}
            className="home-hero__avatar mx-auto rounded-full"
            priority
          />
        </HomeMotionItem>
        <HomeMotionItem>
          <h1 className="home-hero__title font-bold tracking-tight text-foreground">
            {messages.name}
          </h1>
        </HomeMotionItem>
        <HomeMotionItem>
          <div
            className={`home-hero__bio mb-4 font-normal text-foreground ${
              locale === "zh" ? "leading-[1.85]" : "leading-normal"
            }`}
          >
            {messages.bioPrefix}
            <span className="font-semibold">{messages.bioRole}</span>
            {messages.bioMid}
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
            {messages.bioBlogBefore}
            <Link
              href="/blog"
              className="font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60"
            >
              {messages.bioBlogLabel}
            </Link>
            {messages.bioBlogAfter}
          </div>
        </HomeMotionItem>
        <HomeMotionItem>
          <Footer />
        </HomeMotionItem>
      </HomeMotion>
    </div>
  );
}
