"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ContactOutlineForm } from "./contact-outline-form";
import { cn } from "@/lib/utils";
import { fraunces } from "@/app/fonts";

export function ContactView() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-background selection:bg-primary/10 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    <div className="lg:w-1/2 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-8">
                                Contact Us
                            </div>
                            <h1 className={cn("text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.85] mb-12", fraunces.className)}>
                                Let's scale <br />
                                <span className="text-primary italic">together.</span>
                            </h1>

                            <p className="text-base text-muted-foreground/80 max-w-md leading-relaxed mb-16">
                                Whether you're a startup or an established enterprise, we're here to help you navigate the digital landscape with precision and creativity.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-12 pt-16 border-t border-white/5">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">General Inquiries</h4>
                                    <div className="space-y-1">
                                        <Link href="mailto:hello@arkcabin.com" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors">
                                            hello@arkcabin.com
                                        </Link>
                                        <p className="text-[11px] text-muted-foreground/60 leading-tight">
                                            For project starts, collaborations, or just saying hi.
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Partnerships</h4>
                                    <div className="space-y-1">
                                        <Link href="mailto:partners@arkcabin.com" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors">
                                            partners@arkcabin.com
                                        </Link>
                                        <p className="text-[11px] text-muted-foreground/60 leading-tight">
                                            Agencies and vendors seeking strategic alignment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 pt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/5">
                                {["Twitter", "LinkedIn", "Dribbble", "Behance"].map((social) => (
                                    <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 hover:text-white transition-colors duration-300">
                                        {social}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <ContactOutlineForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
