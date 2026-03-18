import Link from "next/link";
import Image from "next/image";
import { formatDate, readingTime } from "@/lib/utils";

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    slug: string;
    category: string;
    publishedAt: string;
    cover?: string;
    body: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {post.cover && (
        <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-lg bg-[var(--background-warm)]">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="mb-2 flex items-center gap-3">
        <span className="text-[11px] tracking-wider text-foreground-muted uppercase">
          {post.category}
        </span>
        <span className="text-[11px] text-foreground-muted">
          {readingTime(post.body)}
        </span>
      </div>

      <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground-secondary">
        {post.title}
      </h3>

      <p className="mb-3 text-sm leading-relaxed text-foreground-muted line-clamp-2">
        {post.description}
      </p>

      <time className="text-xs text-foreground-muted">
        {formatDate(post.publishedAt)}
      </time>
    </Link>
  );
}
