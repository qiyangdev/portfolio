import { BookOpen, House } from "lucide-react";
import Link from "next/link";

const navItems = [
  { path: "/", name: "Home", icon: House },
  { path: "/blog", name: "Blog", icon: BookOpen },
] as const;

const iconClassName = "size-[1em] shrink-0";

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 pr-10">
            {navItems.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className="inline-flex items-center gap-1 text-sm leading-none text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 py-1 px-2 m-1"
              >
                <Icon
                  className={iconClassName}
                  strokeWidth={1.5}
                  aria-hidden
                />
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
