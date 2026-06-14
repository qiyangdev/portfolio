import type { Metadata } from "next";
import { baseUrl, siteConfig } from "@/app/site";

const OG_SIZE = { width: 1200, height: 630 } as const;

export function getOgImageUrl(title?: string) {
  const path = title ? `/og?title=${encodeURIComponent(title)}` : "/og";
  return new URL(path, baseUrl).toString();
}

type ShareMetadataInput = {
  title: string;
  description: string;
  url: string;
  locale?: string;
  type?: "website" | "article";
  publishedTime?: string;
  imageTitle?: string;
};

export function getShareMetadata({
  title,
  description,
  url,
  locale,
  type = "website",
  publishedTime,
  imageTitle,
}: ShareMetadataInput): Pick<Metadata, "openGraph" | "twitter"> {
  const ogImage = getOgImageUrl(imageTitle);
  const images = [{ url: ogImage, ...OG_SIZE, alt: title }];

  return {
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      url,
      locale,
      type,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
