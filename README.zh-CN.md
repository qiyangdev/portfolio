# 启阳的博客

[English](./README.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiyangdev%2Fportfolio)

基于 Next.js 的个人站点与博客：居中深色首页、双语简介、shader 背景与 MDX 文章。

## 功能

- **双语首页** — 根据 `Accept-Language` 请求头自动切换英文 / 中文
- **Shader 背景** — 首页 `@paper-design/shaders-react` 动态网格渐变背景
- **技术栈链接** — 正文内联技术链接（SwiftUI、Expo、Next.js），悬停显示 OG 预览
- **博客** — MDX 文章，Fumadocs MDX + Shiki 代码高亮
- **社交页脚** — 纯图标链接；豆瓣、小红书、微信等仅在中国大陆 IP 下显示
- **SEO** — 站点地图、robots、OG 图片路由、RSS 订阅

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| 内容 | Fumadocs MDX |
| 运行时 | React 19 |
| 包管理 | Bun |

## 快速开始

```bash
bun install
bun dev
```

在浏览器打开 [http://localhost:3000](http://localhost:3000)。

### 构建

```bash
bun run build
bun start
```

### 代码检查

```bash
bun run lint
```

## 项目结构

```
app/
  page.tsx              # 首页（头像、简介、技术链接）
  blog/                 # 博客列表与文章
  api/link-preview/     # 链接预览 API
  components/           # UI（页脚、shader、tech-link、posts、mdx）
  site.ts               # 站点与社交配置
content/
  blog/                 # MDX 文章
lib/
  locale.ts             # 语言检测（en / zh）
  i18n.ts               # 首页文案
  geo.ts                # 页脚地域检测
source.config.ts        # Fumadocs MDX 集合配置
```

## 写文章

在 `content/blog/` 下新建 MDX 文件：

```mdx
---
title: Hello World
description: My first post
date: 2025-01-01
---

Your content here.
```

Frontmatter 字段：`title`、`description`、`date`，可选 `author`（默认 `Qiyang`）。

## 配置

### 站点与社交链接

编辑 `app/site.ts` 修改名称、描述与社交链接；页脚从同文件的 `socialLinks` 读取。

### 首页文案

编辑 `lib/i18n.ts` 修改中英文首页文案。

### 链接预览白名单

`/api/link-preview` 仅对白名单域名拉取 OG 元数据；链接其他域名时请在 `app/api/link-preview/route.ts` 中添加。

### 语言

语言由 `Accept-Language` 推断（`zh` / `zh-*` 为中文，否则英文）；根布局会设置对应的 `html lang`。

## 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiyangdev%2Fportfolio)

专为 [Vercel](https://vercel.com) 设计，点击按钮可一键克隆仓库并部署。

页脚地域图标依赖 `x-vercel-ip-country`；亦支持 Cloudflare 的 `cf-ipcountry`。

已集成 `@vercel/analytics` 与 `@vercel/speed-insights`。

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 元数据与 RSS 的站点 URL |

## 许可

私有仓库 — 详见仓库设置。
