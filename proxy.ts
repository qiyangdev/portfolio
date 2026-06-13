import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isLangOverrideEnabled = process.env.NODE_ENV === "development";

export function proxy(request: NextRequest) {
  if (!isLangOverrideEnabled) {
    return NextResponse.next();
  }

  const lang = request.nextUrl.searchParams.get("lang");

  if (lang !== "en" && lang !== "zh") {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", lang);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
