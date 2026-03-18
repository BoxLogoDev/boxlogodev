import Link from "next/link";
import { siteConfig, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs text-foreground-muted">
              SAP ABAP, AI, 그리고 일상을 기록합니다.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-foreground-muted">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.tistory}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Tistory
            </a>
            <Link
              href="/feed.xml"
              className="transition-colors hover:text-foreground"
            >
              RSS
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
