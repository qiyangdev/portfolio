import { headers } from "next/headers";

export async function isInChina(): Promise<boolean> {
  const headerList = await headers();
  const country =
    headerList.get("x-vercel-ip-country") ?? headerList.get("cf-ipcountry");

  if (country) {
    return country.toUpperCase() === "CN";
  }

  return process.env.NODE_ENV === "development";
}
