export const siteConfig = {
  name: "Qiyang",
  title: "Qiyang",
  description:
    "Software developer building products with SwiftUI, Expo, and Next.js — exploring the goals I pursue as a software engineer.",
  author: "Qiyang",
  links: {
    github: "https://github.com/qiyangdev",
    twitter: "https://x.com/qiyangdev",
    threads: "https://www.threads.com/@qiyangdev",
    reddit: "https://www.reddit.com/user/Huge_Thing_792/",
    tiktok: "https://www.tiktok.com/@qiyangdev",
    douban: "https://www.douban.com/people/qiyangdev",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/qiyangdev",
    wechat: "https://weixin.qq.com/r/qiyangdev",
    dailydotdev: "https://app.daily.dev/qiyang",
  },
};

export const socialLinks: Array<{
  key: keyof typeof siteConfig.links;
  icon: string;
  label: string;
  iconClassName?: string;
  chinaOnly?: boolean;
}> = [
  {
    key: "twitter",
    icon: "/x.svg",
    label: "X",
    iconClassName: "size-[15px]",
  },
  {
    key: "github",
    icon: "/github.svg",
    label: "GitHub",
    iconClassName: "size-[18px]",
  },
  {
    key: "threads",
    icon: "/threads.svg",
    label: "Threads",
  },
  {
    key: "reddit",
    icon: "/reddit.svg",
    label: "Reddit",
  },
  {
    key: "tiktok",
    icon: "/tiktok.svg",
    label: "TikTok",
  },
  {
    key: "douban",
    icon: "/douban.svg",
    label: "Douban",
    chinaOnly: true,
  },
  {
    key: "xiaohongshu",
    icon: "/xiaohongshu.svg",
    label: "Xiaohongshu",
    chinaOnly: true,
  },
  {
    key: "wechat",
    icon: "/wechat.svg",
    label: "WeChat",
    chinaOnly: true,
  },
  {
    key: "dailydotdev",
    icon: "/dailydotdev.svg",
    label: "daily.dev",
  },
];

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
