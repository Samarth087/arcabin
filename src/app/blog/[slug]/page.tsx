import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ArticleJsonLd } from "next-seo";

import { getAllBlogPosts, getBlogPostBySlug } from "@/content/blog/posts";
import { createArticleMetadata } from "@/lib/seo";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple estimate: 1 min per 10 words in description + 1 min overhead
  const getReadingTime = (desc: string) => {
    const wordCount = desc.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 10)) + 1;
  };

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

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-black tracking-widest px-3">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className={cn(
              "text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.15] md:leading-[1.1] tracking-tight mb-8 md:mb-10 text-balance",
              fraunces.className
            )}>
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 py-6 md:py-8 border-y border-border/50">
              <div className="flex items-center gap-3 md:gap-4">
                <Avatar className="size-10 md:size-12 ring-2 md:ring-4 ring-background border border-border">
                  <AvatarImage src={`https://avatar.vercel.sh/${post.author}`} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-black tracking-tight uppercase">{post.author}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground font-medium">Lead Designer @ ArkCabin</span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Published</span>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold">
                    <Calendar className="size-3 md:size-3.5 text-primary/60" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
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
                    {getReadingTime(post.description)} min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-24">
          <div className="relative aspect-video mb-16 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <article className="mx-auto max-w-2xl">
            <p className={cn(
              "text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 mb-12",
              fraunces.className
            )}>
              {post.description}
            </p>

            <div className={cn(
              "text-lg leading-relaxed text-foreground space-y-8 font-light",
              roboto.className
            )}>
              {/* This is where the actual content will go. For now re-using description with more spacing */}
              <p>
                The digital landscape is evolving at an unprecedented pace. Interface design is no longer just about
                aesthetics; it&apos;s about systems that scale, performance that inspires, and practical patterns
                that actually work in production environments.
              </p>
              <p>
                In this article, we delve deep into the core philosophies that drive our studio. From the initial
                architectural decisions to the final polish of the UI, every step is a deliberate move towards
                excellence.
              </p>
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
      </section>

      {/* Studio CTA Section */}
      <div className="border-t border-border/50">
        <CTASection />
      </div>
    </>
  );
}
