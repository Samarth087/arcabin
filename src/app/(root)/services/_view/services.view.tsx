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
      {/* Process Section */}
      <div className="mt-32">
        <WorkflowSection
          title="How We Work"
          items={processSteps}
        />
      </div>

      <div className="mb-20">
        <CTASection />
      </div>
    </div>
  );
}

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We start by understanding your vision, business goals, and target audience. Market research, technology assessment, and a clear roadmap ensure a solid foundation for success.",
    stepNumber: "01",
  },
  {
    title: "Planning & Conceptualization",
    description: "Ideas turn into actionable plans. We define features, user journeys, and technical architecture, ensuring feasibility, timelines, and alignment with your objectives.",
    stepNumber: "02",
  },
  {
    title: "Design & User Experience",
    description: "Our creative team crafts intuitive UI/UX designs. Wireframes and prototypes are iterated for clarity, simplicity, and user engagement.",
    stepNumber: "03",
  },
  {
    title: "Development & Quality Assurance",
    description: "Our engineers build scalable, robust software and mobile apps while our QA team rigorously tests functionality, performance, security, and usability to ensure flawless delivery.",
    stepNumber: "04",
  },
  {
    title: "Launch & Deployment",
    description: "After QA approval, we deploy your solution seamlessly. This includes server setup, app store submission (if applicable), and a smooth transition to the live environment.",
    stepNumber: "05",
  },
  {
    title: "Continuous Support & Optimization",
    description: "Our partnership doesn't end at launch. We provide ongoing monitoring, updates, performance optimization, and technical support, ensuring your software or app continues to deliver maximum value.",
    stepNumber: "06",
  },
];
