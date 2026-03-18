import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { getCategoryPostCount } from "@/lib/content";
import type { CategoryType } from "@/types";

export function CategoriesSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background-warm)]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 font-serif text-xl font-semibold text-foreground">
          카테고리
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const count = getCategoryPostCount(cat.name as CategoryType);
            const href =
              cat.area === "blog"
                ? `/blog?category=${cat.name}`
                : `/daily?category=${cat.name}`;

            return (
              <Link
                key={cat.name}
                href={href}
                className="group flex items-baseline justify-between border-b border-[var(--border)] py-3 transition-colors hover:border-foreground"
              >
                <span className="text-sm text-foreground group-hover:text-foreground">
                  {cat.label}
                </span>
                <span className="text-xs text-foreground-muted">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
