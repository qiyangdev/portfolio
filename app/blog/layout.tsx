import { Noto_Serif_SC, Source_Serif_4 } from "next/font/google";

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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${sourceSerif.variable} ${notoSerifSC.variable} mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-2 py-4 font-home-serif text-foreground md:px-0`}
    >
      {children}
    </div>
  );
}
