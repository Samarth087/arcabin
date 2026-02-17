"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
    { slug: "blender", label: "Blender" },
    { slug: "unity", label: "Unity" },
    { slug: "wordpress", label: "WordPress" },
    { slug: "laravel", label: "Laravel" },
    { slug: "fastapi", label: "FastAPI" },
    { slug: "nextdotjs", label: "Next.js" },
    { slug: "flutter", label: "Flutter" },
    { slug: "vuedotjs", label: "Vue.js" },
    { slug: "nestjs", label: "NestJS" },
    { slug: "postgresql", label: "PostgreSQL" },
    { slug: "mongodb", label: "MongoDB" },
    { slug: "tailwindcss", label: "Tailwind CSS" },
];

export function IntegrationsSection({ className }: { className?: string }) {
    return (
        <section className={cn("py-24 px-4 bg-background relative overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side Content */}
                    <div className="max-w-xl text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8"
                        >
                            Our Tech Stack
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg"
                        >
                            We leverage the most advanced technologies to build
                            high-performance, scalable, and future-ready digital products.
                        </motion.p>
                    </div>

                    {/* Right Side Staggered Diamond Grid */}
                    <div className="relative py-12">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 items-center justify-center">
                            {/* Manual Staggering for the "Diamond" look */}
                            <div className="hidden md:block" />
                            <IntegrationTile item={integrations[0]} />
                            <IntegrationTile item={integrations[1]} />
                            <div className="hidden md:block" />

                            <IntegrationTile item={integrations[2]} />
                            <IntegrationTile item={integrations[3]} />
                            <IntegrationTile item={integrations[4]} />
                            <IntegrationTile item={integrations[5]} />

                            <div className="hidden md:block" />
                            <IntegrationTile item={integrations[6]} />
                            <IntegrationTile item={integrations[7]} />
                            <div className="hidden md:block" />

                            <div className="hidden md:block" />
                            <div className="hidden md:block" />
                            <IntegrationTile item={integrations[8]} />
                            <IntegrationTile item={integrations[9]} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function IntegrationTile({ item }: { item: typeof integrations[0] }) {
    return (
        <motion.div
            transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 150,
                damping: 15
            }}
            className="group relative flex items-center justify-center"
        >
            <div className="size-20 md:size-24 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 shadow-2xl overflow-visible">

                {/* Glow focused specifically on the icon area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="size-16 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Brand Icon */}
                <div className="relative z-10 filter brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500">
                    <Image
                        src={`https://cdn.simpleicons.org/${item.slug}`}
                        alt={item.label}
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        unoptimized
                    />
                </div>

                {/* Under-tile subtle shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-white/5 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
}
