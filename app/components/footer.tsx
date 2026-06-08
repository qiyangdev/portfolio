import { ExternalLink, Rss } from "lucide-react";
import { siteConfig } from "@/app/site";

const iconClassName = "size-[1em] shrink-0";

const linkClassName =
  "inline-flex items-center gap-1 text-sm leading-none text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 py-1 px-2 m-1";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="-ml-[8px] mt-8 flex flex-row items-center space-x-0">
        <li>
          <a className={linkClassName} href="/rss">
            <Rss className={iconClassName} strokeWidth={1.5} aria-hidden />
            RSS
          </a>
        </li>
        <li>
          <a
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
            href={siteConfig.links.twitter}
          >
            <ExternalLink
              className={iconClassName}
              strokeWidth={1.5}
              aria-hidden
            />
            Twitter
          </a>
        </li>
        <li>
          <a
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
            href={siteConfig.links.github}
          >
            <ExternalLink
              className={iconClassName}
              strokeWidth={1.5}
              aria-hidden
            />
            GitHub
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} {siteConfig.author}
      </p>
    </footer>
  );
}
