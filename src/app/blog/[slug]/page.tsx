import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "next-seo";

import { getAllBlogPosts, getBlogPostBySlug } from "@/content/blog/posts";
import { createArticleMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: BlogPostPageProps): Metadata | undefined {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return;
  }

  return createArticleMetadata({
    slug: post.slug,
    basePath: "/blog",
    title: post.title,
    description: post.description,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkcabin.com";
  const url = `${base}/blog/${post.slug}`;

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        headline={post.title}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt ?? post.publishedAt}
        description={post.description}
        image={post.image}
        author={post.author}
        isAccessibleForFree
        mainEntityOfPage={url}
      />

      <section className="px-4 md:px-6 py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold">
              {post.title}
            </h1>
            <p className="text-muted-foreground mt-3 text-sm">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
              {" · "}
              {post.author}
            </p>
          </header>

          <p className="text-muted-foreground text-base leading-relaxed">
            {post.description}
          </p>
        </article>
      </section>
    </>
  );
}
