"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[100vh] flex-col items-center justify-start pt-32 md:pt-48 pb-32 mb-20 overflow-hidden bg-background px-4">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container relative z-10 mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={cn(
                        "text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-primary/10 select-none",
                        fraunces.className
                    )}>
                        404
                    </span>

                    <div className="-mt-12 md:-mt-20">
                        <h1 className={cn(
                            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8",
                            fraunces.className
                        )}>
                            Lost in the <span className="italic text-primary">wilderness?</span>
                        </h1>

                        <p className={cn(
                            "mx-auto max-w-md text-base text-muted-foreground leading-relaxed mb-10",
                            roboto.className
                        )}>
                            The cabin you&apos;re looking for doesn&apos;t exist—or it&apos;s been
                            skillfully moved to a different location.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Button
                        size="lg"
                        className="rounded-full px-8 h-11 font-black text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
                        asChild
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="size-3.5" />
                            BACK TO BASECAMP
                        </Link>
                    </Button>
                </motion.div>
            </div>

        </main>
    );
}
