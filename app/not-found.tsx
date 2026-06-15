import Link from "next/link";
import { Noto_Serif_SC, Source_Serif_4 } from "next/font/google";
import { HomeMotion, HomeMotionItem } from "@/app/components/home-motion";
import { getNotFoundMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

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

const inlineLinkClassName =
  "font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60";

export default async function NotFound() {
  const locale = await getLocale();
  const messages = getNotFoundMessages(locale);

  return (
    <div
      className={`${sourceSerif.variable} ${notoSerifSC.variable} site-content text-center font-home-serif text-foreground`}
    >
      <HomeMotion className="home-hero relative z-10">
        <HomeMotionItem>
          <p className="home-hero__bio mb-3 text-neutral-400">
            {messages.label}
          </p>
        </HomeMotionItem>
        <HomeMotionItem>
          <h1 className="home-hero__title font-bold tracking-tight text-foreground">
            {messages.heading}
          </h1>
        </HomeMotionItem>
        <HomeMotionItem>
          <p
            className={`home-hero__bio font-normal text-foreground ${
              locale === "zh" ? "leading-[1.85]" : "leading-normal"
            }`}
          >
            {messages.descriptionPrefix}
            {messages.homeBefore}
            <Link href="/" className={inlineLinkClassName}>
              {messages.homeLabel}
            </Link>
            {messages.homeAfter}
          </p>
        </HomeMotionItem>
      </HomeMotion>
    </div>
  );
}
