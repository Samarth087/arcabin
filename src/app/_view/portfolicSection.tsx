"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500", // longer because stacks need space
          scrub: true,
          pin: true,
        },
      });

      /* =========================
       PHASE 1 — right → center
    ========================== */
      tl.fromTo(
        cardRef.current,
        { x: "40vw" },
        { x: 0, duration: 3, ease: "none" },
      );

      /* =========================
       PHASE 2 — lock
    ========================== */
      tl.to(cardRef.current, { duration: 0.5 });

      /* =========================
       PHASE 3 — fullscreen morph
    ========================== */
      tl.to(cardRef.current, {
        width: "100vw",
        height: "100vh",
        top: 0,
        x: 0,
        y: 0,
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
          { yPercent: 100 }, // start BELOW viewport
          { yPercent: 0, duration: 5, ease: "none" }, // land CENTER
          "+=0.6",
        );

        /* lock */
        tl.to(current, { duration: 1.5 });

        /* 👇 HERO HANDOFF (only once, on first stack card) */
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
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* HERO CARD */}
      <div
        ref={cardRef}
        className="
          portfolio-hero hero-item 
          absolute left-1/2 top-1/2
          w-[50vw] h-[50vh]
          -translate-x-1/2 -translate-y-1/2
          rounded-[100px] overflow-hidden
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
      <div className="portfolio-content absolute inset-0 flex items-end p-[5vw] opacity-0 pointer-events-none">
        <h2 className="text-white text-[clamp(2rem,5vw,5rem)]">
          Classic Capsule®
        </h2>
      </div>

      {/* STACKED PORTFOLIOS */}
      <div className="portfolio-stack absolute inset-0 pointer-events-none">
        <div className="stack-card stack-item">
          <Image
            src="/images/web-ui-8.webp"
            alt="Portfolio"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="stack-card stack-item">
          <Image
            src="/images/web-ui-3.webp"
            alt="Portfolio"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="stack-card stack-item">
          <Image
            src="/images/web-ui-6.webp"
            alt="Portfolio"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
