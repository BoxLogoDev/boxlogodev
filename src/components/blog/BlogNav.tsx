import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogNavProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function BlogNav({ prev, next }: BlogNavProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-16 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex items-start gap-3 py-2"
        >
          <ArrowLeft
            size={14}
            className="mt-1 shrink-0 text-foreground-muted transition-transform group-hover:-translate-x-1"
          />
          <div className="min-w-0">
            <p className="text-[11px] tracking-wider text-foreground-muted uppercase">
              이전 글
            </p>
            <p className="mt-1 text-sm font-medium text-foreground truncate">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex items-start justify-end gap-3 py-2 text-right"
        >
          <div className="min-w-0">
            <p className="text-[11px] tracking-wider text-foreground-muted uppercase">
              다음 글
            </p>
            <p className="mt-1 text-sm font-medium text-foreground truncate">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={14}
            className="mt-1 shrink-0 text-foreground-muted transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </nav>
  );
}
