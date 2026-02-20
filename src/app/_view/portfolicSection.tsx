"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StackCard } from "../_widget/stackCard";
import { Marquee } from "@/components/ui/marquee";
import { useProjects } from "@/hooks/useProjects";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { data: projects, isLoading, isError } = useProjects();

  const featuredProjects = projects?.filter((p) => p.isFeatured) || [];

  useGSAP(
    () => {
      if (featuredProjects.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${featuredProjects.length * 2500}`,
          scrub: true,
          pin: true,
        },
      });

      /* =========================
       PHASE 2 — lock
    ========================== */
      tl.to(cardRef.current, { duration: 2.5 });

      /* =========================
       PHASE 3 — fullscreen morph
    ========================== */
      tl.to(cardRef.current, {
        scale: 2, // adjust until it fills viewport
        borderRadius: 0,
        duration: 3,
        ease: "power3.inOut",
      });

      const stackCards = gsap.utils.toArray<HTMLElement>(".stack-card");

      stackCards.forEach((current, index) => {
        const prev = stackCards[index - 1];

        /* ensure current card is on top */
        tl.set(current, {
          zIndex: index + 10,
        });

        /* current card: bottom → center */
        tl.fromTo(
          current,
          {
            y: window.innerHeight, // fully below viewport
          },
          {
            y: 0, // perfectly aligned at top
            duration: 5,
            ease: "none",
          },
          "+=0.6",
        );

        /* lock */
        tl.to(current, { duration: 1.5 });

        /* HERO HANDOFF (only once, on first stack card) */
        if (index === 0) {
          tl.to(
            cardRef.current,
            {
              scale: 0.65,
              opacity: 0,
              duration: 2.5,
              ease: "none",
            },
            "-=4", // sync with first stack entry
          );
        }

        /* previous card shrinks AFTER current starts moving */
        if (prev) {
          tl.to(
            prev,
            {
              scale: 0.65,
              duration: 2.5,
              opacity: 0,
              ease: "none",
            },
            "-=4",
          );
        }
      });
      /* =========================
       PHASE 4 — hero text
    ========================== */
      tl.fromTo(
        ".portfolio-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5",
      );
    },
    { scope: sectionRef, dependencies: [featuredProjects] },
  );

  if (isLoading) {
    return (
      <div className="h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary font-mono text-xl">Loading Projects...</div>
      </div>
    );
  }

  if (isError || featuredProjects.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-1 flex items-center overflow-hidden pointer-events-none">
        <Marquee
          repeat={6}
          className="text-[14vw] font-semibold text-white/30 tracking-tight [--duration:40s]"
        >
          <p className="mx-10 bg-linear-to-b from-primary to-danger bg-clip-text text-transparent">
            ArkCabin<span className="text-[9vw]">®</span>
          </p>
        </Marquee>
      </div>

      {/* HERO CARD */}
      <div
        ref={cardRef}
        className="
    portfolio-hero hero-item 
    absolute
    left-[50%] top-[50%]
    -translate-x-1/2 -translate-y-1/2
    w-[50vw] h-[50vh]
    rounded-[100px] overflow-hidden
    will-change-transform
    z-5
  "
      >
        <Image
          src={featuredProjects[0].thumbnail?.url || "/images/web-ui-2.webp"}
          alt="Portfolio"
          fill
          priority
          className="object-cover rounded-[100px]"
        />
      </div>

      {/* CONTENT */}
      <div className="portfolio-content absolute inset-0 flex items-end p-[5vw] opacity-0 pointer-events-none ">
        <h2 className="text-white text-[clamp(2rem,5vw,5rem)]">
          {featuredProjects[0].name}
        </h2>
      </div>

      {/* STACKED PORTFOLIOS */}
      <div className="portfolio-stack absolute inset-0 pointer-events-none z-10">
        {featuredProjects.map((project, i) => (
          <StackCard
            key={project.id}
            title={project.name}
            description={project.shortDescription || project.description?.text || ""}
            index={i}
            thumbnail={project.thumbnail?.url}
            gallery={project.gallery}
            tags={project.tags}
            cta="View Project"
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
