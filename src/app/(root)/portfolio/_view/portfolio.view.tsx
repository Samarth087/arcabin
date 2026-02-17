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

const allProjects = [
    {
        title: "Lumière Duplex",
        description: "A modern desert retreat blending architecture and nature seamlessly. Large glass facades allow natural light to flood the interior.",
        image: "/images/portfolio-1.png",
        tag: "Residential",
        location: "Featured Project",
    },
    {
        title: "Solace Pavilion",
        description: "Minimal living space with panoramic views designed for clarity. Every element is carefully curated to foster a sense of peace.",
        image: "/images/portfolio-2.png",
        tag: "Zen Space",
        location: "Featured Project",
    },
    {
        title: "Eon Capsule",
        description: "Future-forward living concept pushing the boundaries of space efficiency. Innovative materials create a sustainable ecosystem.",
        image: "/images/portfolio-1.png",
        tag: "Futuristic",
        location: "Featured Project",
    },
    {
        title: "Nebula Heights",
        description: "A sky-high urban oasis designed for modern professionals. Integrating green spaces with smart city technology for an unparalleled living experience.",
        image: "/images/portfolio-2.png",
        tag: "Commercial",
        location: "New Project",
    },
];

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
    return (
        <div className="bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[5%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
                <div className="absolute top-[25%] -right-[15%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-primary/8 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 py-32 lg:py-48">
                {/* Hero Section */}
                <div className="mb-32 lg:mb-40 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 lg:gap-x-12 lg:gap-y-32">
                    {allProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Professional Expertise Section */}
                <div className="mt-64 lg:mt-96">
                    <div className="mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-6 flex justify-center"
                        >
                            <div className="rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                                <TypingText text="Professional Expertise" />
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white"
                        >
                            Elevating Through <span className="text-primary italic font-display">Craft.</span>
                        </motion.h2>
                    </div>

                    <div className="mx-auto w-full max-w-6xl">
                        <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
                            <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 md:grid-cols-3">
                                {expertise.map((item, idx) => (
                                    <FeatureCard feature={item} key={idx} className="bg-transparent hover:bg-white/[0.03] transition-colors duration-500" />
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

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index % 2 * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="group flex flex-col gap-6"
        >
            {/* Project Image Container - Static Banner */}
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/10 transition-colors duration-500 hover:border-primary/30 group/card">
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-700"
                    />
                </div>

                {/* Overlay on hover - Static (no translate) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <Button size="sm" className="rounded-full w-fit bg-primary hover:bg-white text-black transition-all duration-300 shadow-[0_0_25px_rgba(var(--primary),0.25)]">
                        Explore <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>

            {/* Project Info - Compact typography */}
            <div className="px-4 space-y-3">
                <div className="flex items-center gap-2.5">
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-primary/70 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">
                        {project.tag}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/30 italic">
                        {project.location}
                    </span>
                </div>

                <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-sm text-white/40 font-light leading-relaxed max-w-sm line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
