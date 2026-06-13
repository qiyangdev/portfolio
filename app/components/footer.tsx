import { siteConfig } from "@/app/site";

const linkClassName =
  "inline-flex items-center gap-1 text-sm leading-none text-neutral-300 transition-colors hover:text-neutral-100 py-0.5 px-2";

function FooterIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="size-[1.25em] shrink-0 object-contain brightness-0 invert opacity-90"
      aria-hidden
    />
  );
}

export default function Footer() {
  return (
    <footer className="mb-8 text-center text-neutral-300">
      <ul className="mt-4 flex flex-row items-center justify-center gap-2">
        <li>
          <a
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
            href={siteConfig.links.twitter}
            aria-label="X (Twitter)"
          >
            <FooterIcon src="/x.svg" />
          </a>
        </li>
        <li>
          <a
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
            href={siteConfig.links.github}
            aria-label="GitHub"
          >
            <FooterIcon src="/github.svg" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
