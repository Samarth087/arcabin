"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="size-10 border-4 border-background ring-1 ring-border shadow-sm">
                  <AvatarImage src={`https://avatar.vercel.sh/${i + 20}`} alt="User" />
                  <AvatarFallback className="bg-muted text-[10px]">U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">
                Crafting Excellence with 140+ Partners
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8",
              fraunces.className
            )}>
              Ready to bring your digital{" "}
              <span className="italic text-primary">vision to life?</span>
            </h2>
            <p className={cn(
              "mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12",
              roboto.className
            )}>
              ArkCabin helps modern brands grow digitally with high-performance websites
              and custom web apps designed to rank, convert, and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-12 font-bold text-[11px] uppercase tracking-[0.15em] bg-white text-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                GET STARTED
                <ArrowUpRight className="size-3.5 mt-0.5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-muted/50 transition-all w-full sm:w-auto border-border"
              asChild
            >
              <Link href="/services" className="flex items-center justify-center w-full">
                VIEW SERVICES
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
