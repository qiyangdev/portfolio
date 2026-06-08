import { ExternalLink, Rss } from "lucide-react";
import { siteConfig } from "@/app/site";

const iconClassName = "size-[1em] shrink-0";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-y-2 text-sm leading-none text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="inline-flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/rss"
          >
            <Rss className={iconClassName} strokeWidth={1.5} aria-hidden />
            rss
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={siteConfig.links.github}
          >
            <ExternalLink
              className={iconClassName}
              strokeWidth={1.5}
              aria-hidden
            />
            github
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
