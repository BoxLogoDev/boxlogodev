import Link from "next/link";
import { getPosts } from "@/lib/content";
import { formatDate, readingTime } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function RecentPostsSection() {
  const recentPosts = getPosts().slice(0, 5);

  if (recentPosts.length === 0) return null;

  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            최신 글
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-xs text-foreground-muted transition-colors hover:text-foreground"
          >
            전체 보기 <ArrowRight size={12} />
          </Link>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {recentPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 py-5 transition-colors first:pt-0"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-[11px] tracking-wider text-foreground-muted uppercase">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-foreground-muted">
                    {readingTime(post.body)}
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-foreground-secondary truncate">
                  {post.title}
                </h3>
              </div>
              <time className="shrink-0 text-xs text-foreground-muted">
                {formatDate(post.publishedAt)}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
