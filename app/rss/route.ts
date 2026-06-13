import { baseUrl, siteConfig } from "@/app/site";
import { getSortedBlogPages } from "@/lib/source";

export async function GET() {
  const posts = getSortedBlogPages("en");

  const itemsXml = posts
    .map(
      (post) => `<item>
          <title>${escapeXml(String(post.data.title))}</title>
          <link>${baseUrl}${post.url}</link>
          <description>${escapeXml(String(post.data.description ?? ""))}</description>
          <pubDate>${new Date(String(post.data.date)).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${escapeXml(siteConfig.name)}</title>
        <link>${baseUrl}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
