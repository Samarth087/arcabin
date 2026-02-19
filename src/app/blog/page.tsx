import type { Metadata } from "next";

import { getAllBlogPosts } from "@/content/blog/posts";
import { getStaticPageMetadata } from "@/lib/seo";
import BlogList from "./blog-list";
import { fraunces } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = getStaticPageMetadata("blog");

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="px-4 md:px-6 py-24 min-h-screen bg-background selection:bg-primary/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 mb-20">
          <h1 className={cn(
            "text-4xl md:text-7xl lg:text-8xl font-black tracking-tight",
            fraunces.className
          )}>
            The <span className="text-primary italic">Journal</span>
          </h1>
          <div className="h-1 w-24 bg-primary/20 rounded-full" />
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
            An editorial space for digital excellence, exploring the intersection of
            technology, design, and studio culture.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </section>
  );
}
