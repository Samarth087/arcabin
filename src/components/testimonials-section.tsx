"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
    {
        content: "ArkCabin transformed our vision into a stunning digital reality. Their attention to detail and technical expertise is unmatched.",
        author: "James Wilson",
        role: "CEO, TechFlow",
        avatar: "https://i.pravatar.cc/150?u=james",
    },
    {
        content: "The workflow implementation was seamless. They didn't just build a site; they built a tool that scaled our business.",
        author: "Sarah Chen",
        role: "Director of Ops, Spark",
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        content: "A truly professional team. The performance of our new platform exceeded all expectations. Highly recommended!",
        author: "Marcus Brown",
        role: "Founder, Zenith",
        avatar: "https://i.pravatar.cc/150?u=marcus",
    },
    {
        content: "The attention to UI/UX detail is what set ArkCabin apart. They understood our brand and delivered a product that resonates with our users.",
        author: "Emily Rodriguez",
        role: "Product Lead, Bloom",
        avatar: "https://i.pravatar.cc/150?u=emily",
    },
    {
        content: "Fast, reliable, and highly skilled. They managed to launch our mobile app ahead of schedule without compromising quality.",
        author: "David Kim",
        role: "CTO, Nexus",
        avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
        content: "A partnership that truly adds value. Their strategic advice was just as important as the code they wrote.",
        author: "Sophia Martinez",
        role: "VP of Marketing, Catalyst",
        avatar: "https://i.pravatar.cc/150?u=sophia",
    },
    // {
    //     content: "The AI automation they implemented saved our team hundreds of hours. A complete game changer for our operations.",
    //     author: "Robert Chen",
    //     role: "Director of IT, Scape",
    //     avatar: "https://i.pravatar.cc/150?u=robert",
    // },
    // {
    //     content: "From the first meeting to the final launch, the experience was world-class. Professionalism at its finest.",
    //     author: "Linda Johnson",
    //     role: "Founder, Aurora",
    //     avatar: "https://i.pravatar.cc/150?u=linda",
    // },
];

export function TestimonialsSection({ className }: { className?: string }) {
    return (
        <section className={cn("py-32 px-4 relative overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
                    >
                        What our clients <span className="text-white/40 italic font-display">say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/50 text-lg max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Here's how we've helped
                        ambitious companies reach their digital potential.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard key={i} testimonial={testimonial} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative group"
        >
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-white/80 text-white/80" />
                ))}
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden border border-white/10">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
            </div>

            {/* Subtle hover effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
}
