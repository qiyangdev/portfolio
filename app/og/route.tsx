import { ImageResponse } from "takumi-js/response";
import { siteConfig } from "@/app/site";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || siteConfig.name;
  const isHomepage = !url.searchParams.has("title");

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          padding: "60px 72px",
          justifyContent: "space-between",
        }}
      >
        <p
          tw="text-xl"
          style={{ color: "#a3a3a3", letterSpacing: "0.05em" }}
        >
          {siteConfig.name}
        </p>

        <h1
          tw="text-5xl font-bold text-white leading-tight"
          style={{ maxWidth: "1000px" }}
        >
          {isHomepage ? siteConfig.description : title}
        </h1>

        <div tw="flex items-center justify-between">
          <p tw="text-xl" style={{ color: "#737373" }}>
            qiyang.dev
          </p>
          <p tw="text-xl" style={{ color: "#737373" }}>
            {siteConfig.name}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
