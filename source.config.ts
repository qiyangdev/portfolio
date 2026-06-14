import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { remarkJoinCjkLines } from "@/lib/remark-join-cjk-lines";
import { z } from "zod";

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string().default("Qiyang"),
    date: z.coerce.date(),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkJoinCjkLines],
    rehypeCodeOptions: {
      themes: {
        light: "dracula-soft",
        dark: "dracula-soft",
      },
    },
  },
});
