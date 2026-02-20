"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Zap, Target, Heart, Layers } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";

const values = [
    {
        icon: Target,
        title: "Purpose-Driven",
        description: "Every pixel and line of code exists to serve a specific business goal and user need."
    },
    {
        icon: Zap,
        title: "High-Performance",
        description: "We build for speed. Fast loading isn't a feature; it's the foundation of everything we do."
    },
    {
        icon: Layers,
        title: "Design-Led",
        description: "Engineering without design is just code. We bridge the gap between aesthetics and function."
    },
    {
        icon: Heart,
        title: "Built to Last",
        description: "We write clean, sustainable code that scales with your ambition, not against it."
    }
];

export function AboutView() {
    return (
        <main className="bg-background selection:bg-primary/10 min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 md:px-6 py-24 lg:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-primary/[0.05] to-transparent -z-10" />

                <div className="container mx-auto max-w-7xl">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ margin: "-100px" }}
                        >
                            <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5 font-black uppercase tracking-[0.2em] text-[10px]">
                                THE STUDIO
                            </Badge>
                            <h1 className={cn(
                                "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance text-white",
                                fraunces.className
                            )}>
                                Architecture for <span className="text-primary italic">modern brands.</span>
                            </h1>
                            <p className={cn(
                                "text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl",
                                roboto.className
                            )}>
                                ArkCabin is a specialized digital studio crafting high-performance
                                websites and web experiences through design-led engineering.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="px-4 md:px-6 py-24 lg:py-40 bg-white/[0.02] border-y border-white/5 overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ margin: "-100px" }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                alt="Studio Environment"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ margin: "-100px" }}
                        >
                            <h2 className={cn("text-3xl md:text-5xl font-bold mb-8 text-white", fraunces.className)}>
                                The <span className="text-primary italic">Philosophy</span>
                            </h2>
                            <div className={cn("space-y-6 text-lg text-white/50 leading-relaxed", roboto.className)}>
                                <p>
                                    We believe that the best digital products are born from a deep understanding
                                    of both design and engineering. In a world of cookie-cutter templates,
                                    we focus on bespoke solutions that actually convert.
                                </p>
                                <p>
                                    Our approach is simple: we remove the friction between your vision and
                                    the final product. By operating as a lean, focused studio, we provide
                                    the attention to detail that large agencies often overlook.
                                </p>
                                <div className="pt-8 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className={cn("text-4xl font-black text-primary mb-2", fraunces.className)}>140+</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-white/30">Partners Helped</div>
                                    </div>
                                    <div>
                                        <div className={cn("text-4xl font-black text-primary mb-2", fraunces.className)}>99%</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-white/30">Client Retention</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 lg:py-40">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ margin: "-100px" }}
                    >
                        <h2 className={cn("text-4xl md:text-6xl font-bold mb-6 text-white", fraunces.className)}>
                            What drives <span className="text-primary italic">us?</span>
                        </h2>
                        <p className={cn("text-white/50 max-w-2xl mx-auto text-lg", roboto.className)}>
                            Core principles that guide every project we take on and every decision we make.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ margin: "-100px" }}
                                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-primary/20 transition-all hover:bg-white/[0.04] text-center"
                            >
                                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                    <v.icon className="size-6 text-primary" />
                                </div>
                                <h3 className={cn("text-xl font-bold mb-4 text-white", fraunces.className)}>{v.title}</h3>
                                <p className={cn("text-sm text-white/40 leading-relaxed", roboto.className)}>{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Integration */}
            <div className="border-t border-white/5">
                <CTASection />
            </div>
        </main>
    );
}
