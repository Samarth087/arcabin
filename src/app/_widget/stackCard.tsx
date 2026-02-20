import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface StackCardProps {
  title: string;
  description: string;
  index: number;
  thumbnail?: string;
  gallery?: { url: string }[];
  tags?: string[];
  location?: string;
  cta?: string;
  url?: string;
  feature?: { label: string; value: string };
}

const gridSpans = [
  "md:col-span-1 md:row-span-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  "md:col-span-1 md:row-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  "md:col-span-1 md:row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  "md:col-span-2 md:row-span-1 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  "md:col-span-1 md:row-span-1 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  "md:col-span-1 md:row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
];

export const StackCard = ({
  title,
  description,
  index,
  thumbnail,
  gallery = [],
  tags = [],
  location,
  cta = "View Project",
  url,
  feature,
}: StackCardProps) => {
  const hasGallery = gallery && gallery.length > 0;

  return (
    <div
      className="
        stack-card
        absolute inset-0
        flex items-start
        will-change-transform
      "
      data-index={index}
    >
      <div className="w-screen max-w-screen h-screen mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-background pt-24 pointer-events-auto">
        {/* LEFT COLUMN — BENTO or SINGLE IMAGE */}
        <div
          className={cn(
            "relative bg-card p-4 md:p-5 rounded-3xl h-[60vh] md:h-[85vh] overflow-hidden shadow-2xl",
            index % 2 === 1 ? "md:order-2" : "md:order-1",
          )}
        >
          {hasGallery ? (
            <BentoGrid className="grid-rows-3 h-full gap-3 md:gap-4">
              {gallery.slice(0, 6).map((item, idx) => (
                <BentoCard
                  key={idx}
                  className={gridSpans[idx]}
                  background={
                    <Image
                      src={item.url}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  }
                />
              ))}
            </BentoGrid>
          ) : (
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <Image
                src={thumbnail || "/images/portfolio-1.png"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — CONTENT */}
        <div
          className={cn(
            "stack-content h-[30vh] md:h-[85vh] rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-xl relative bg-foreground text-background",
            index % 2 === 1 ? "md:order-1" : "md:order-2",
          )}
        >
          {/* Key Feature Card (Floating) */}
          {feature && (
            <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-card/10 backdrop-blur-md border border-card/20 p-4 rounded-2xl hidden md:block">
              <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                {feature.label}
              </p>
              <p className="text-2xl font-bold text-background">
                {feature.value}
              </p>
            </div>
          )}

          {/* Top Section */}
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-10 opacity-80">
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-background/70">
                {location || "Featured Project"}
              </span>
            </div>

            <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[0.9] font-bold tracking-tight mb-6 md:mb-8 font-serif text-background">
              {title}
            </h2>

            <p className="text-base md:text-xl text-background/70 max-w-lg leading-relaxed font-light line-clamp-4 md:line-clamp-none">
              {description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="space-y-8 md:space-y-12">
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full border border-white/20 text-xs md:text-sm text-white/60 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-8 border-t border-background/10">
              <a
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden rounded-full bg-white text-black px-8 py-3 font-medium transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
