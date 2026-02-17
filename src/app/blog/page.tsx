import type { Metadata } from "next";
import Link from "next/link";

import { getAllBlogPosts } from "@/content/blog/posts";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("blog");

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A space for writing about interface design, component systems, and
          practical patterns for shipping fast Next.js sites.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6 last:border-b-0">
              <h2 className="text-xl md:text-2xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

