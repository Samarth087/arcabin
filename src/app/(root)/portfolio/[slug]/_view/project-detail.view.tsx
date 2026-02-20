"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";
import { HygraphProject } from "@/lib/hygraph";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IntegrationsSection } from "@/components/integrations-section";
import { CTASection } from "@/components/cta-section";

import { useProject } from "@/hooks/useProjects";

interface ProjectDetailViewProps {
    project: HygraphProject;
}

export function ProjectDetailView({ project: initialProject }: ProjectDetailViewProps) {
    const { data: projectData } = useProject(initialProject.slug);
    const data = projectData || initialProject;
    return (
        <main className="bg-background selection:bg-primary/10 min-h-screen pb-32">
            {/* Hero Section */}
            <section className="relative w-full aspect-[21/9] md:aspect-[24/10] overflow-hidden">
                <Image
                    src={data.thumbnail?.url || ""}
                    alt={data.name}
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="container mx-auto px-4 md:px-6 pb-12 lg:pb-24 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                {data.tags.map((tag: string, i: number) => (
                                    <Badge key={i} variant="outline" className="px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-black tracking-widest">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className={cn(
                                "text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.85] mb-8",
                                fraunces.className
                            )}>
                                {data.name}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 md:px-6 mt-12 lg:mt-24 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={cn("text-2xl md:text-3xl font-bold mb-8 text-white", fraunces.className)}>
                                The <span className="text-primary italic">Overview</span>
                            </h2>
                            <p className={cn("text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-12", roboto.className)}>
                                {data.shortDescription}
                            </p>

                            <div
                                className={cn(
                                    "prose prose-invert prose-lg max-w-none text-white/50 leading-relaxed space-y-6",
                                    roboto.className
                                )}
                                dangerouslySetInnerHTML={{
                                    __html: (typeof data.description === 'string' ? data.description : (data.description?.html || data.description?.text || ""))
                                }}
                            />
                        </motion.div>

                        {/* Gallery Grid */}
                        {data.gallery && data.gallery.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="pt-12"
                            >
                                <h2 className={cn("text-2xl md:text-3xl font-bold mb-12 text-white", fraunces.className)}>
                                    Project <span className="text-primary italic">Gallery</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {data.gallery.map((image: { url: string }, i: number) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group",
                                                i === 0 && "md:col-span-2 md:aspect-[21/9]"
                                            )}
                                        >
                                            <Image
                                                src={image.url}
                                                alt={`${data.name} gallery ${i + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar / Info */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32 space-y-12"
                        >
                            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 space-y-8">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4 flex items-center gap-2">
                                        <Calendar className="size-3 text-primary" /> Timeline
                                    </h4>
                                    <p className="text-white text-lg font-medium">Built in 2024</p>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4 flex items-center gap-2">
                                        <Tag className="size-3 text-primary" /> Industry
                                    </h4>
                                    <p className="text-white text-lg font-medium">B2B SaaS / Product Engineering</p>
                                </div>

                                <hr className="border-white/5" />

                                <div className="pt-4">
                                    <Button className="w-full rounded-2xl h-14 bg-primary hover:bg-white text-black font-bold tracking-tight text-lg shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-300">
                                        Visit Live Project <ExternalLink className="ml-2 size-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Tags Cloud */}
                            <div className="px-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.tags.map((tag: string, i: number) => (
                                        <span key={i} className="text-[10px] font-mono tracking-widest uppercase text-white/40 border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <div className="mt-32 border-t border-white/5">
                <IntegrationsSection />
            </div>

            {/* CTA Integration */}
            <div className="border-t border-white/5">
                <CTASection />
            </div>
        </main>
    );
}
