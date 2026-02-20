"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Smartphone, Globe, Code, Database, Zap, Users, Bot, TrendingUp, Cuboid, ExternalLink } from "lucide-react";
import { TypingText } from "@/components/ui/typing-text";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WorkflowSection } from "@/components/workflow-section";
import { processSteps } from "@/constant/workflow";
import { FeatureCard } from "@/components/feature-section";
import { useProjects } from "@/hooks/useProjects";
import { HygraphProject } from "@/lib/hygraph";
import { fraunces, roboto } from "@/app/fonts";
import Link from "next/link";
import { useState } from "react";

const expertise = [
    {
        title: "App Development",
        description: "Native and cross-platform mobile apps built for performance and scale.",
        icon: <Smartphone />,
    },
    {
        title: "Web Development",
        description: "Production-ready Next.js applications with modern architecture.",
        icon: <Globe />,
    },
    {
        title: "Custom Website Development",
        description: "Tailored websites that perfectly match your brand identity and business goals.",
        icon: <Code />,
    },
    {
        title: "WordPress Plugin Development",
        description: "Custom plugins to extend your WordPress functionality beyond the basics.",
        icon: <Database />,
    },
    {
        title: "API Development",
        description: "Robust, secure, and scalable APIs to power your digital ecosystem.",
        icon: <Zap />,
    },
    {
        title: "CRM & CPR Systems",
        description: "Custom Customer Relationship Management tools streamlined for your workflow.",
        icon: <Users />,
    },
    {
        title: "AI Automation",
        description: "Intelligent workflows and bots to automate repetitive tasks and save time.",
        icon: <Bot />,
    },
    {
        title: "SEO & Meta Ads",
        description: "Data-driven strategies to increase visibility and convert traffic.",
        icon: <TrendingUp />,
    },
    {
        title: "3D Animation & WebGL",
        description: "Immersive 3D experiences, interactive models, and motion graphics for the web.",
        icon: <Cuboid />,
    },
];

export function PortfolioView() {
    const { data: projects, isLoading, isError } = useProjects();

    return (
        <div className="bg-background relative overflow-hidden selection:bg-primary/10">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[5%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
                <div className="absolute top-[25%] -right-[15%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-primary/8 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 py-24 lg:py-32 max-w-7xl">
                {/* Hero Section */}
                <div className="mb-24 lg:mb-32 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8 flex justify-center md:justify-start"
                    >
                        <div className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md shadow-[0_0_20px_rgba(var(--primary),0.15)] ring-1 ring-white/5">
                            <TypingText text="Selected Works" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="mb-8 text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85]"
                    >
                        Built for <span className="text-primary italic font-display">Impact.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-lg text-white/50 md:text-xl leading-relaxed font-light mx-auto md:mx-0"
                    >
                        A showcase of architectural vision and digital precision. We bridge the gap between imagination and reality with premium design and cutting-edge tech.
                    </motion.p>
                </div>

                {/* Projects Section - 2 Column Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="animate-pulse flex flex-col gap-6">
                                <div className="aspect-[16/10] rounded-[2.5rem] bg-white/5" />
                                <div className="space-y-3 px-4">
                                    <div className="h-4 w-20 bg-white/5 rounded-full" />
                                    <div className="h-8 w-64 bg-white/5 rounded-md" />
                                    <div className="h-4 w-full bg-white/5 rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : isError ? (
                    <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10">
                        <p className="text-white/60 mb-6 italic">Oops! We couldn&apos;t fetch our latest works right now.</p>
                        <Button variant="outline" className="rounded-full" onClick={() => window.location.reload()}>
                            Retry Connection
                        </Button>
                    </div>
                ) : projects && projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
                        {projects.map((project: HygraphProject, index: number) => (
                            <ProjectCard key={project.id || index} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10">
                        <p className="text-white/60 mb-6 italic">No projects found. Add some content in your Hygraph dashboard to see them here.</p>
                        <Button variant="outline" className="rounded-full" onClick={() => window.location.reload()}>
                            Refresh
                        </Button>
                    </div>
                )}

                {/* Professional Expertise Section */}
                <div className="mt-64 lg:mt-96">
                    <div className="mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px" }}
                            className="mb-6 flex justify-center"
                        >
                            <div className="rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                                <TypingText text="Professional Expertise" />
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white"
                        >
                            Elevating Through <span className="text-primary italic font-display">Craft.</span>
                        </motion.h2>
                    </div>

                    <div className="mx-auto w-full max-w-5xl">
                        <div className="overflow-hidden rounded-lg border">
                            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
                                {expertise.map((item, idx) => (
                                    <FeatureCard feature={item} key={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mt-64 lg:mt-96">
                    <WorkflowSection
                        title="Our Creative Process"
                        items={processSteps}
                        className="bg-transparent px-0"
                    />
                </div>

                {/* Decorative Marquee */}
                <div className="mt-64 relative overflow-hidden py-32 border-y border-white/5">
                    <Marquee repeat={10} className="text-[15vw] font-black text-white/[0.03] uppercase tracking-tighter leading-none select-none">
                        ArkCabin · Innovation · Architecture · Design ·
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: HygraphProject, index: number }) {
    const isEven = index % 2 === 0;
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col gap-6"
        >
            <Link
                href={`/portfolio/${project.slug}`}
                className="block cursor-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Project Image Container - Static Banner */}
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/10 transition-colors duration-500 hover:border-primary/30 group/card">
                    <div className="absolute inset-0">
                        <Image
                            src={project.thumbnail?.url || ""}
                            alt={project.name}
                            fill
                            className="object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                        />
                    </div>

                    {/* Custom Follow Cursor */}
                    <motion.div
                        className="pointer-events-none absolute z-50 flex items-center justify-center rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black shadow-2xl"
                        animate={{
                            x: mousePos.x,
                            y: mousePos.y,
                            scale: isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
                        style={{
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    >
                        Explore <ExternalLink className="ml-1.5 h-3 w-3" />
                    </motion.div>

                    {/* Overlay on hover - Static (no translate) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                </div>
            </Link>

            {/* Project Info - Compact typography */}
            <Link href={`/portfolio/${project.slug}`} className="px-4 space-y-3 block">
                <div className="flex flex-wrap items-center gap-2">
                    {project.tags?.slice(0, 3).map((tag: string, i: number) => {
                        // Convert camelCase or snake_case to Title Case
                        const formattedTag = tag
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, (str) => str.toUpperCase())
                            .trim();
                        return (
                            <span key={i} className="text-[9px] font-mono tracking-[0.2em] uppercase text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full whitespace-nowrap">
                                {formattedTag}
                            </span>
                        );
                    })}
                    {project.tags?.length > 3 && (
                        <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30 px-1">
                            +{project.tags.length - 3} more
                        </span>
                    )}
                </div>

                <div className="space-y-2">
                    <h3 className={cn(
                        "text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300",
                        fraunces.className
                    )}>
                        {project.name}
                    </h3>
                    <p className={cn(
                        "text-sm text-white/40 font-light leading-relaxed max-w-sm line-clamp-2",
                        roboto.className
                    )}>
                        {project.shortDescription || (typeof project.description === 'string' ? project.description : project.description?.text)}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
