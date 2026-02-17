"use client";

import { TypingText } from "@/components/ui/typing-text";
import {
  Bot,
  Code,
  Cuboid,
  Database,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { FeatureCard } from "@/components/feature-section";
import { CTASection } from "@/components/cta-section";

const services = [
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

export function ServicesView() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full border border-border/50 bg-secondary/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
            <TypingText text="Our Expertise" />
          </div>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Digital Solutions for <span className="text-primary italic font-display">Growth</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          From concept to code, we deliver high-quality digital products. 
          Explore our range of services designed to scale your business.
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden rounded-lg border">
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
                {services.map((service) => (
                    <FeatureCard feature={service} key={service.title} />
                ))}
            </div>
        </div>
      </div>
      
     
      
      {/* Process Section - Brief */}
      <div className="mt-32 border-t border-b border-border/40 py-24">
        <div className="grid gap-12 lg:grid-cols-2">

            <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How We Work</h2>
                <p className="mt-4 text-muted-foreground">We follow a proven process to ensure every project is delivered on time and exceeds expectations.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary/20">01</div>
                    <h3 className="text-xl font-semibold">Discovery</h3>
                    <p className="text-sm text-muted-foreground">We dive deep into your goals, audience, and challenges.</p>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary/20">02</div>
                    <h3 className="text-xl font-semibold">Design</h3>
                    <p className="text-sm text-muted-foreground">Crafting intuitive and beautiful interfaces.</p>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary/20">03</div>
                    <h3 className="text-xl font-semibold">Development</h3>
                    <p className="text-sm text-muted-foreground">Building robust, scalable, and clean code.</p>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary/20">04</div>
                    <h3 className="text-xl font-semibold">Launch</h3>
                    <p className="text-sm text-muted-foreground">Deployment, testing, and ongoing support.</p>
                </div>
            </div>
        </div>
      </div>
       <div className="mb-20">
        <CTASection />
      </div>
    </div>
  );
}
