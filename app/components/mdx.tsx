import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      alt={props.alt ?? ""}
      width={Number(props.width) || 800}
      height={Number(props.height) || 450}
      className="rounded-lg"
    />
  ),
};
