import type { Metadata } from "next";
import { getBlogPosts, getPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { BLOG_CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "블로그",
  description: "SAP ABAP, AI, Economy 관련 기술 블로그 글 모음",
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const posts = category
    ? getPosts().filter((p) => p.category === category)
    : getBlogPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          블로그
        </h1>
        <p className="mt-2 text-sm text-foreground-muted">
          SAP ABAP, AI, 경제에 대한 이야기
        </p>
      </div>

      {/* 카테고리 필터 */}
      <div className="mb-10 flex gap-6 border-b border-[var(--border)]">
        <Link
          href="/blog"
          className={cn(
            "border-b-2 pb-3 text-sm transition-colors",
            !category
              ? "border-foreground text-foreground"
              : "border-transparent text-foreground-muted hover:text-foreground",
          )}
        >
          전체
        </Link>
        {BLOG_CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={`/blog?category=${cat.name}`}
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

      {/* 글 목록 */}
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
