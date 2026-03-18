import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPost, getAdjacentPosts } from "@/lib/content";
import { MDXContent } from "@/components/mdx/MDXContent";
import { BlogMeta } from "@/components/blog/BlogMeta";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { BlogNav } from "@/components/blog/BlogNav";
import { siteConfig } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.cover
        ? [{ url: post.cover }]
        : [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 */}
      <header className="mb-12 max-w-2xl">
        <p className="mb-4 text-xs tracking-widest text-foreground-muted uppercase">
          {post.category}
        </p>
        <h1 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <BlogMeta post={post} />
      </header>

      {/* 구분선 */}
      <div className="mb-12 h-px bg-[var(--border)]" />

      {/* 본문 + TOC */}
      <div className="flex gap-16">
        <article className="min-w-0 flex-1">
          <MDXContent code={post.body} />
          <BlogNav prev={prev} next={next} />
        </article>

        {/* 사이드바 TOC */}
        {post.toc && post.toc.length > 0 && (
          <aside className="hidden w-48 shrink-0 lg:block">
            <BlogTOC toc={post.toc} />
          </aside>
        )}
      </div>
    </div>
  );
}
