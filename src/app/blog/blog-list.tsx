"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";

import { HygraphBlogPost } from "@/lib/hygraph";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";

import { useBlogPosts } from "@/hooks/useBlog";

interface BlogListProps {
    posts?: HygraphBlogPost[];
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 100, damping: 20 } },
};

export default function BlogList({ posts: initialPosts }: BlogListProps) {
    const { data: postsData } = useBlogPosts();
    const posts = postsData || initialPosts || [];
    const [featuredPost, ...remainingPosts] = posts;

    // Simple estimate: 1 min per 10 words in description + 1 min overhead
    const getReadingTime = (desc: string) => {
        const wordCount = desc.split(/\s+/).length;
        return Math.max(1, Math.ceil(wordCount / 10)) + 1;
    };

    return (
        <div className="space-y-24">
            {/* Featured Post */}
            {featuredPost && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <Card className="border-none bg-transparent shadow-none overflow-visible">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-3xl">
                                    <Image
                                        src={featuredPost.coverImage.url}
                                        alt={featuredPost.title}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-3xl" />
                                </div>

                                <div className="lg:col-span-5 flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 text-xs font-bold px-3 py-1">
                                            FEATURED
                                        </Badge>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                                            <Clock className="size-3 text-primary/60" />
                                            <span>{getReadingTime(featuredPost.excerpt)} min read</span>
                                        </div>
                                    </div>

                                    <h2 className={cn(
                                        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight group-hover:text-primary transition-colors duration-300",
                                        fraunces.className
                                    )}>
                                        {featuredPost.title}
                                    </h2>

                                    <p className={cn(
                                        "text-muted-foreground text-lg leading-relaxed line-clamp-4",
                                        roboto.className
                                    )}>
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center gap-4 mt-2">
                                        <Avatar className="size-10 ring-2 ring-background border border-border">
                                            <AvatarImage src={`https://avatar.vercel.sh/ArkCabin`} />
                                            <AvatarFallback>A</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold tracking-tight">ArkCabin</span>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight pt-2">
                                        Read Story
                                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            )}

            {/* Grid Posts */}
            {remainingPosts.length > 0 && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20"
                >
                    {remainingPosts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div className="flex flex-col gap-6">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                                        <Image
                                            src={post.coverImage.url}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 45vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl" />
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                                                <Clock className="size-2.5" />
                                                <span>{getReadingTime(post.excerpt)} min read</span>
                                            </div>
                                        </div>

                                        <h3 className={cn(
                                            "text-2xl font-bold leading-snug group-hover:text-primary transition-colors duration-300",
                                            fraunces.className
                                        )}>
                                            {post.title}
                                        </h3>

                                        <p className={cn(
                                            "text-muted-foreground text-sm leading-relaxed line-clamp-3",
                                            roboto.className
                                        )}>
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-3 pt-2">
                                            <Avatar className="size-7 border border-border">
                                                <AvatarImage src={`https://avatar.vercel.sh/ArkCabin`} />
                                                <AvatarFallback>A</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold">ArkCabin</span>
                                                <span className="text-[10px] text-muted-foreground">
                                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
