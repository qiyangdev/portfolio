import { headers } from "next/headers";

export type Locale = "en" | "zh";

export async function getLocale(): Promise<Locale> {
  const acceptLanguage = (await headers()).get("accept-language") ?? "";

  for (const part of acceptLanguage.split(",")) {
    const lang = part.trim().split(";")[0].toLowerCase();
    if (lang === "zh" || lang.startsWith("zh-")) {
      return "zh";
    }
  }

  return "en";
}

export function localeToHtmlLang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}
