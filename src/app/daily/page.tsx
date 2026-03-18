import type { Metadata } from "next";
import { getDailyPosts, getPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { DAILY_CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "일상",
  description: "커피, 여행, 책, 아트 — 일상의 기록",
};

interface DailyPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function DailyPage({ searchParams }: DailyPageProps) {
  const { category } = await searchParams;
  const posts = category
    ? getPosts().filter((p) => p.category === category)
    : getDailyPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          일상
        </h1>
        <p className="mt-2 text-sm text-foreground-muted">
          커피, 여행, 책, 그리고 아트 이야기
        </p>
      </div>

      <div className="mb-10 flex gap-6 border-b border-[var(--border)]">
        <Link
          href="/daily"
          className={cn(
            "border-b-2 pb-3 text-sm transition-colors",
            !category
              ? "border-foreground text-foreground"
              : "border-transparent text-foreground-muted hover:text-foreground",
          )}
        >
          전체
        </Link>
        {DAILY_CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={`/daily?category=${cat.name}`}
            className={cn(
              "border-b-2 pb-3 text-sm transition-colors",
              category === cat.name
                ? "border-foreground text-foreground"
                : "border-transparent text-foreground-muted hover:text-foreground",
            )}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-sm text-foreground-muted">
            아직 작성된 글이 없어요.
          </p>
        </div>
      )}
    </div>
  );
}
