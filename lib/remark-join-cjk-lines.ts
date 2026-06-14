import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const cjk =
  /[\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffee]/u;

const joinCjkLineBreaks = new RegExp(
  `(${cjk.source})(\\s*\\n+\\s*)(${cjk.source})`,
  "gmu",
);

export const remarkJoinCjkLines: Plugin<[], Root> = () => (tree) => {
  visit(tree, "text", (node) => {
    node.value = node.value.replace(joinCjkLineBreaks, "$1$3");
  });
};
