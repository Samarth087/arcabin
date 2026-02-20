import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { hygraph, BlogPostsResponse, HygraphBlogPost } from "@/lib/hygraph";
import { gql } from "graphql-request"; // Keep gql for generateStaticParams
import { GET_BLOG_POST_QUERY } from "@/hooks/useBlog"; // Import GET_BLOG_POST_QUERY
import { QUERY_KEYS } from "@/lib/query-keys";
import { createArticleMetadata } from "@/lib/seo";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";
import { RichText } from "@graphcms/rich-text-react-renderer";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Removed GET_BLOG_POSTS_SLUGS and GET_BLOG_POST_QUERY as they are either inlined or imported

export async function generateStaticParams() {
  const data = await hygraph.request<BlogPostsResponse>(gql`query GetSlugs { blogPosts { slug } }`);
  return data.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const data = await hygraph.request<{ blogPost: HygraphBlogPost }>(GET_BLOG_POST_QUERY, { slug });
  const post = data.blogPost;

  if (!post) {
    return;
  }

  return createArticleMetadata({
    slug: post.slug,
    basePath: "/blog",
    title: post?.seoTitle || post.title,
    description: post?.seoDescription || post.excerpt,
    image: post?.coverImage?.url || "",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.blog.detail(slug),
    queryFn: async () => {
      const data = await hygraph.request<{ blogPost: HygraphBlogPost }>(GET_BLOG_POST_QUERY, { slug });
      return data.blogPost;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPostView slug={slug} />
    </HydrationBoundary>
  );
}

// We can move the main rendering logic to a client component for better pattern separation
async function BlogPostView({ slug }: { slug: string }) {
  const data = await hygraph.request<{ blogPost: HygraphBlogPost }>(GET_BLOG_POST_QUERY, { slug });
  const post = data.blogPost;

  if (!post) {
    notFound();
  }

  // Simple estimate: 1 min per 10 words in excerpt + 1 min overhead
  const getReadingTime = (desc: string) => {
    const wordCount = desc.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 10)) + 1;
  };

  return (
    <section className="min-h-screen bg-background">
      {/* Editorial Hero */}
      <div className="relative w-full pt-28 pb-12 md:pt-40 md:pb-24 border-b border-border/50 bg-muted/5">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-primary mb-8 md:mb-12 group transition-colors hover:text-primary/70"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            BACK TO JOURNAL
          </Link>

          <h1 className={cn(
            "text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] tracking-tight mb-8 md:mb-10 text-balance",
            fraunces.className
          )}>
            {post.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 py-6 md:py-8 border-y border-border/50">
            <div className="flex items-center gap-3 md:gap-4">
              <Avatar className="size-10 md:size-12 ring-2 md:ring-4 ring-background border border-border">
                <AvatarImage src={`https://avatar.vercel.sh/ArkCabin`} />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-black tracking-tight uppercase">ArkCabin</span>
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium">Lead Designer @ ArkCabin</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Published</span>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold">
                  <Calendar className="size-3 md:size-3.5 text-primary/60" />
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div className="h-8 w-px bg-border/50" />
              <div className="flex flex-col gap-1">
                <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Read Time</span>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold">
                  <Clock className="size-3 md:size-3.5 text-primary/60" />
                  {getReadingTime(post.excerpt)} min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-24">
        {post.coverImage?.url && (
          <div className="relative aspect-video mb-16 overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <article className="mx-auto max-w-2xl">
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 mb-12",
            fraunces.className
          )}>
            {post.excerpt}
          </p>

          <div className="max-w-none text-foreground leading-relaxed">
            {post.content?.raw && <RichText
              content={post.content.raw}
              renderers={{
                h1: ({ children }) => (
                  <h1 className={cn("text-3xl md:text-5xl font-bold mb-8 mt-12 tracking-tight", fraunces.className)}>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className={cn("text-2xl md:text-4xl font-bold mb-6 mt-10 tracking-tight", fraunces.className)}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className={cn("text-xl md:text-3xl font-bold mb-4 mt-8 tracking-tight", fraunces.className)}>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className={cn("text-lg md:text-xl font-light mb-6 opacity-80", roboto.className)}>
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className={cn("border-l-4 border-primary pl-8 py-4 my-12 italic text-2xl md:text-3xl font-light bg-white/[0.03] rounded-r-2xl", fraunces.className)}>
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside pl-6 space-y-4 mb-8">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside pl-6 space-y-4 mb-8">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className={cn("pl-2 text-lg md:text-xl font-light opacity-80", roboto.className)}>
                    {children}
                  </li>
                ),
                img: ({ src, altText, width, height }) => (
                  <div className="relative aspect-video my-12 overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                    <Image
                      src={src || ''}
                      alt={altText || ''}
                      width={width || 1200}
                      height={height || 675}
                      className="object-cover"
                    />
                  </div>
                ),
                a: ({ children, href, openInNewTab }) => {
                  const isExternal = href?.startsWith('http');
                  if (isExternal) {
                    return (
                      <a
                        href={href}
                        target={openInNewTab ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:text-white"
                      >
                        {children}
                      </a>
                    );
                  }
                  return (
                    <Link
                      href={href || '#'}
                      className="text-primary underline underline-offset-4 decoration-primary/30 transition-colors hover:text-white"
                    >
                      {children}
                    </Link>
                  );
                },
                bold: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                italic: ({ children }) => <em className="italic text-white/90">{children}</em>,
              }}
            />}
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="mt-20 pt-12 border-t border-border/50 flex flex-col items-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-primary/5 text-primary border border-primary/10 font-bold text-[11px] uppercase tracking-[0.15em] transition-all hover:bg-white/5 hover:border-primary hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            <ArrowLeft className="size-3.5" />
            BROWSE MORE JOURNALS
          </Link>
        </div>
      </div>

      <div className="border-t border-border/50">
        <CTASection />
      </div>
    </section>
  );
}
