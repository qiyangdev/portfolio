export const siteConfig = {
  name: 'Qiyang',
  title: 'Qiyang',
  description:
    'Software developer building web products and writing about the ideas, tools, and problems I keep coming back to.',
  author: 'Qiyang',
  links: {
    github: 'https://github.com/qiyangdev/blog',
  },
}

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000')
