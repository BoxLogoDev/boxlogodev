import { CATEGORIES } from "@/lib/constants";
import { formatDate, readingTime } from "@/lib/utils";

interface BlogMetaProps {
  post: {
    category: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    body: string;
    tags: string[];
  };
}

export function BlogMeta({ post }: BlogMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
      <span className="text-xs tracking-wider uppercase">{post.category}</span>
      <span className="text-foreground-muted">&middot;</span>
      <span>{formatDate(post.publishedAt)}</span>
      <span className="text-foreground-muted">&middot;</span>
      <span>{readingTime(post.body)}</span>

      {post.tags.length > 0 && (
        <>
          <span className="text-foreground-muted">&middot;</span>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-foreground-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
