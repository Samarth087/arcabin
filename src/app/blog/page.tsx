import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { hygraph, BlogPostsResponse } from "@/lib/hygraph";
import { GET_BLOG_POSTS_QUERY } from "@/hooks/useBlog";
import { QUERY_KEYS } from "@/lib/query-keys";
import BlogListInner from "./blog-list";
import { getStaticPageMetadata } from "@/lib/seo";
import { fraunces } from "@/app/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = getStaticPageMetadata("blog");

export default async function BlogPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.blog.all,
    queryFn: async () => {
      const data = await hygraph.request<BlogPostsResponse>(GET_BLOG_POSTS_QUERY);
      return data.blogPosts;
    },
  });

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

        <HydrationBoundary state={dehydrate(queryClient)}>
          <BlogListInner />
        </HydrationBoundary>
      </div>
    </section>
  );
}
