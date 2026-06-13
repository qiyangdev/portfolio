import Image from "next/image";
import { siteConfig } from "@/app/site";

const techLinks = {
  swiftui: "https://developer.apple.com/swiftui/",
  expo: "https://expo.dev/",
  nextjs: "https://nextjs.org/",
} as const;

function TechLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60"
    >
      <img
        src={icon}
        alt=""
        className="mr-0.5 inline size-[1em] object-contain align-[-0.12em] brightness-0 invert opacity-80"
        aria-hidden
      />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <section className="text-center">
      <Image
        src="/avatar.png"
        alt={siteConfig.name}
        width={72}
        height={72}
        className="mx-auto mb-4 rounded-full"
        priority
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteConfig.name}
      </h1>
      <p className="mb-4 text-base leading-normal">
        Software developer building products with{" "}
        <TechLink href={techLinks.swiftui} icon="/swift.svg">
          SwiftUI
        </TechLink>
        ,{" "}
        <TechLink href={techLinks.expo} icon="/expo.svg">
          Expo
        </TechLink>
        , and{" "}
        <TechLink href={techLinks.nextjs} icon="/nextdotjs.svg">
          Next.js
        </TechLink>{" "}
        — exploring the goals I pursue as a software engineer.
      </p>
    </section>
  );
}
