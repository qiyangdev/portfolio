import { siteConfig, socialLinks } from "@/app/site";
import { isInChina } from "@/lib/geo";

const linkClassName =
  "inline-flex size-8 items-center justify-center text-neutral-300 transition-colors hover:text-neutral-100";

function FooterIcon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt=""
      className={`object-contain brightness-0 invert opacity-90 ${className ?? "size-4"}`}
      aria-hidden
    />
  );
}

export default async function Footer() {
  const inChina = await isInChina();
  const visibleLinks = socialLinks.filter(
    (link) => !link.chinaOnly || inChina,
  );

  return (
    <footer className="relative z-10 mb-8 text-center text-neutral-300">
      <ul className="mt-4 flex flex-row flex-wrap items-center justify-center gap-1">
        {visibleLinks.map(({ key, icon, label, iconClassName }) => (
          <li key={key}>
            <a
              className={linkClassName}
              rel="noopener noreferrer"
              target="_blank"
              href={siteConfig.links[key]}
              aria-label={label}
            >
              <FooterIcon src={icon} className={iconClassName} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
