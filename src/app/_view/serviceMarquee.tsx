import { Marquee } from "@/components/ui/marquee";

const ServicesMarquee = () => {
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <Marquee
        repeat={6}
        className="text-sm md:text-2xl text-foreground/70 bg-secondary"
      >
        <span className="mx-6 whitespace-nowrap">
          UI/UX Design
        </span>
        <span className="text-foreground/40">•</span>

        <span className="mx-6 whitespace-nowrap">
          Brand Identity
        </span>
        <span className="text-foreground/40">•</span>

        <span className="mx-6 whitespace-nowrap">
          Code Customization
        </span>
        <span className="text-foreground/40">•</span>

        <span className="mx-6 whitespace-nowrap">
          Website Design & Development
        </span>
        <span className="text-foreground/40">•</span>
      </Marquee>
    </section>
  );
};

export default ServicesMarquee;
