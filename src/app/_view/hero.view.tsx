import { AnimatedGroup } from "@/components/ui/animatedGroup";
import { Button } from "@/components/ui/button";
import { CursorCard, CursorCardsContainer } from "@/components/ui/cursor-card";
import { TextEffect } from "@/components/ui/textEffect";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSectionHeader from "../_widget/heroSectionHeader";
import HeroCodePanel from "../_widget/heroSectionCodeDisplay";
import HeroCardsGrid from "../_widget/heroCardGrid";
import { vscodeTree } from "@/constant/vscodeFolderData";
import dynamic from "next/dynamic";
import { Variants } from "motion/react";

const VscodeExplorer = dynamic(
  () => import("../_layout/navProject").then((mod) => mod.VscodeExplorer),
  {
    ssr: false,
    loading: () => (
      <aside className="w-60 shrink-0 border-r bg-background/80 backdrop-blur-sm" />
    ),
  }
);

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroView = () => {
  return (
    <main className="overflow-hidden pb-24 lg:pb-80">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className=" relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
          >
            <div className="hidden size-full dark:block -z-20 bg-linear-to-b from-[#0c0c0c] to-[#1a1a1a]" />
            {/* <Image
              src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
              alt="background"
              className="hidden size-full dark:block -z-20"
              width="3276"
              height="4095"
            /> */}
          </AnimatedGroup>

          <div
            aria-hidden
            className="absolute inset-0 -z-20 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
          />

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <div className="w-fit mx-auto">
                <AnimatedGroup variants={transitionVariants}>
                  <CursorCardsContainer className="w-fit rounded-full p-px">
                    <CursorCard>
                      <Link
                        href="#link"
                        className="group mx-auto flex w-fit items-center gap-4 rounded-full p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:shadow-zinc-950"
                      >
                        <span className="text-foreground text-sm">
                          Design in Detail.
                        </span>
                        <span className=" block h-4 w-0.5 bg-background"></span>

                        <div className="bg-background size-6 overflow-hidden rounded-full duration-500">
                          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                            <span className="flex size-6">
                              <ArrowRight className="m-auto size-3" />
                            </span>
                            <span className="flex size-6">
                              <ArrowRight className="m-auto size-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </CursorCard>
                  </CursorCardsContainer>
                </AnimatedGroup>
              </div>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mx-auto mt-5 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-8 xl:text-[5.25rem]"
              >
                Crafted{" "}
                <span className="font-display italic font-light">Websites</span>{" "}
                <span className="font-display italic font-light">Lasting</span>{" "}
                Impressions
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance text-lg"
              >
                Highly customizable components for building modern websites and
                applications that look and feel the way you mean it.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <div
                  key={1}
                  className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <Link href="#link">
                    <span className="text-nowrap">Request a demo</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="">
              <div className="relative mx-auto mt-8 w-full px-2 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 relative mx-auto max-w-[90%] lg:max-w-6xl overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/15 ring-1 backdrop-blur-lg">
                  <div className="aspect-15/8 bg-background rounded-md flex flex-col">
                    <HeroSectionHeader />
                    <div className="flex-1 min-h-0">
                      {/* Explorer */}
                      <div className="flex h-full">
                      <VscodeExplorer tree={vscodeTree} />
                      <div className="flex flex-1 min-w-0">
                        {/* Left: Code */}
                        <div className="w-3/5 border-r border-white/10">
                          <HeroCodePanel />
                        </div>

                        {/* Right: Cards */}
                        <div className="w-2/5 h-full" id="hero-cards-column">
                          <HeroCardsGrid />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
};

export default HeroView;
