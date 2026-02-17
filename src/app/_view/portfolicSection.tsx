"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StackCard } from "../_widget/stackCard";
import { Marquee } from "@/components/ui/marquee";
import { portfolioGrid, portfolioGridSecond } from "@/constant/protfolioData";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Lumière Duplex",
    description:
      "A modern desert retreat blending architecture and nature seamlessly. Large glass facades allow natural light to flood the interior, blurring the lines between indoor and outdoor living.",
    location: "Joshua Tree, CA",
    tags: ["Residential", "Sustainable", "Modern"],
    cta: "View Case Study",
    feature: { label: "Area", value: "450 m²" },
    data: portfolioGrid,
  },
  {
    title: "Solace Pavilion",
    description:
      "Minimal living space with panoramic views designed for clarity and peace of mind. The structure utilizes locally sourced timber and stone.",
    location: "Kyoto, Japan",
    tags: ["Minimalist", "Zen", "Hideaway"],
    cta: "Explore Design",
    feature: { label: "Material", value: "Timber" },
    data: portfolioGridSecond,
  },
  {
    title: "Eon Capsule",
    description:
      "Future-forward living concept pushing the boundaries of space efficiency. Features AI-integrated home automation and self-sustaining energy systems.",
    location: "Neo-Tokyo, JP",
    tags: ["Futuristic", "Concept", "Smart Home"],
    cta: "Techn Stack",
    feature: { label: "Tech", value: "AI Core" },
    data: portfolioGrid,
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=7500",
          scrub: true,
          pin: true,
        },
      });

      /* =========================
       PHASE 1 — right → center
    ========================== */
      // tl.fromTo(
      //   cardRef.current,
      //   {
      //     x: "40vw",
      //     y: "-50%",
      //     xPercent: -50,
      //   },
      //   {
      //     x: 0,
      //     y: "-50%",
      //     xPercent: -50,
      //     duration: 3,
      //     ease: "none",
      //   },
      // );

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

        // tl.fromTo(
        //   content,
        //   {
        //     opacity: 0,
        //     y: 30,
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     delay: 1,
        //     duration: 1.5,
        //     ease: "power3.out",
        //   },
        //   "-=1.5",
        // );

        // fade out previous card content
        // if (prev) {
        //   const prevContent = prev.querySelector(
        //     ".stack-content",
        //   ) as HTMLElement;
        //   if (prevContent) {
        //     tl.to(
        //       prevContent,
        //       {
        //         opacity: 0,
        //         y: -20,
        //         duration: 0.8,
        //         ease: "power2.in",
        //       },
        //       "<",
        //     );
        //   }
        // }
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
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-background"
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
      {/* <Marquee repeat={6} className="text-sm md:text-2xl">
        <img
          src="/images/ArkCabin.svg" // replace with your logo
          alt="logo"
          className="w-[90%]"
        />
      </Marquee> */}

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
          src="/images/web-ui-2.webp"
          alt="Portfolio"
          fill
          priority
          className="object-cover rounded-[100px]"
        />
      </div>

      {/* CONTENT */}
      <div className="portfolio-content absolute inset-0 flex items-end p-[5vw] opacity-0 pointer-events-none ">
        <h2 className="text-white text-[clamp(2rem,5vw,5rem)]">
          Classic Capsule®
        </h2>
      </div>

      {/* STACKED PORTFOLIOS */}
      <div className="portfolio-stack absolute inset-0 pointer-events-none z-10">
        {slides.map((slide, i) => (
          <StackCard
            key={i}
            title={slide.title}
            description={slide.description}
            index={i}
            data={slide.data}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
