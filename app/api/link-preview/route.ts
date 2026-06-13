import { NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set([
  "developer.apple.com",
  "expo.dev",
  "nextjs.org",
]);

function readMetaContent(html: string, key: string) {
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`,
      "i",
    ),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return undefined;
}

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let parsed: URL;

  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!ALLOWED_HOSTS.has(parsed.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; QiyangBlogLinkPreview/1.0)",
      Accept: "text/html",
    },
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch page" }, { status: 502 });
  }

  const html = await response.text();
  const title =
    readMetaContent(html, "og:title") ??
    html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  const rawImage = readMetaContent(html, "og:image");
  const image =
    rawImage && !rawImage.startsWith("http")
      ? new URL(rawImage, url).href
      : rawImage;
  const description = readMetaContent(html, "og:description");

  return NextResponse.json({
    url,
    title,
    image,
    description,
  });
}
