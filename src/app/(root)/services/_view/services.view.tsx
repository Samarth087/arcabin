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
import { WorkflowSection } from "@/components/workflow-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import CloudLogoSection from "@/app/_view/cloudLogoSection";
import FAQsSection from "@/app/_view/faqSection";
import { CTASection } from "@/components/cta-section";
import { processSteps } from "@/constant/workflow";

const services = [
  {
    title: "SaaS Development",
    description: "End-to-end SaaS engineering for startups, from MVP architecture to scalable production systems.",
    icon: <Globe />,
  },
  {
    title: "Custom Web Applications",
    description: "High-performance software solutions and complex web platforms built with modern tech stacks.",
    icon: <Code />,
  },
  {
    title: "AI Automation & Workflows",
    description: "Intelligent agentic workflows and AI-driven systems to automate complex business processes.",
    icon: <Bot />,
  },
  {
    title: "Startup MVP Lab",
    description: "Rapid development of minimum viable products to validate your vision and attract investors.",
    icon: <Zap />,
  },
  {
    title: "Advanced Motion & WebGL",
    description: "Immersive 3D experiences, premium animations, and interactive motion graphics for the web.",
    icon: <Cuboid />,
  },
  {
    title: "Enterprise API Design",
    description: "Robust, secure, and highly scalable API ecosystems to power your digital infrastructure.",
    icon: <Database />,
  },
  {
    title: "Specialized WordPress",
    description: "Beyond basic themes—custom plugins and headless WordPress architectures for performance.",
    icon: <Code />,
  },
  {
    title: "CRM & Product Systems",
    description: "Custom-built internal tools and management systems tailored to your unique business needs.",
    icon: <Users />,
  },
  {
    title: "Growth SEO & Meta Ads",
    description: "Strategic search engine optimization and data-driven ad campaigns to scale your digital reach.",
    icon: <TrendingUp />,
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
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Digital Solutions for <span className="text-primary italic font-display">Growth</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          From concept to code, we deliver high-quality digital products.
          Explore our range of services designed to scale your business.
        </p>
      </div>


      <div className="mx-auto w-full max-w-5xl mb-32">
        <div className="overflow-hidden rounded-lg border">
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <FeatureCard feature={service} key={service.title} />
            ))}
          </div>
        </div>
      </div>

      <IntegrationsSection />


      {/* Process Section */}
      <div className="">
        <WorkflowSection
          title="How We Work"
          items={processSteps}
        />
      </div>

      <TestimonialsSection />

      <div className="">
        <FAQsSection />
      </div>

      <div className="">
        <CTASection />
      </div>
    </div>
  );
}

