"use client";

import { useCallback, useRef, useState } from "react";

type LinkPreviewData = {
  url: string;
  title?: string;
  image?: string;
  description?: string;
};

type TechLinkProps = {
  href: string;
  icon: string;
  children: React.ReactNode;
};

export function TechLink({ href, icon, children }: TechLinkProps) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<LinkPreviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const cacheRef = useRef<Map<string, LinkPreviewData>>(new Map());

  const loadPreview = useCallback(async () => {
    const cached = cacheRef.current.get(href);
    if (cached) {
      setPreview(cached);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/link-preview?url=${encodeURIComponent(href)}`,
      );

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as LinkPreviewData;
      cacheRef.current.set(href, data);
      setPreview(data);
    } catch {
      // Ignore preview failures; link still works.
    } finally {
      setLoading(false);
    }
  }, [href]);

  const handleEnter = () => {
    setOpen(true);
    void loadPreview();
  };

  const handleLeave = () => {
    setOpen(false);
  };

  return (
    <span className="relative inline-block whitespace-nowrap">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline whitespace-nowrap font-semibold text-inherit underline underline-offset-2 decoration-current/35 transition-colors hover:decoration-current/60"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        <img
          src={icon}
          alt=""
          className="mr-0.5 inline size-[1em] object-contain align-[-0.12em] brightness-0 invert opacity-80"
          aria-hidden
        />
        {children}
      </a>

      {open && (
        <span
          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 overflow-hidden rounded-lg border border-white/15 bg-neutral-950 text-left shadow-2xl"
          role="tooltip"
        >
          <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
            <span className="size-2 rounded-full bg-red-400/80" />
            <span className="size-2 rounded-full bg-yellow-300/80" />
            <span className="size-2 rounded-full bg-green-400/80" />
          </div>

          <div className="relative h-32 bg-neutral-900">
            {preview?.image ? (
              <img
                src={preview.image}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-3 text-center text-xs text-neutral-500">
                {loading ? "Loading preview…" : "Preview unavailable"}
              </div>
            )}
          </div>

          <div className="space-y-0.5 px-2.5 py-2">
            <p className="truncate text-xs font-medium text-neutral-100">
              {preview?.title ?? children}
            </p>
            {preview?.description && (
              <p className="truncate text-[11px] leading-snug text-neutral-400">
                {preview.description}
              </p>
            )}
            <p className="truncate text-[10px] text-neutral-500">{href}</p>
          </div>
        </span>
      )}
    </span>
  );
}
