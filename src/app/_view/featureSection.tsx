import { Button } from "@/components/ui/button";
import { features } from "@/constant/feature";
import { TechGrid } from "../_widget/featureGridCard";
import Link from "next/link";

const FeatureGrid = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-bold text-5xl">Elevate Your</h2>
          <h2 className="font-bold text-5xl">Digital Footprint.</h2>
        </div>

        <div className="space-x-3">
          <Button className="rounded-full" asChild>
            <Link href="/services">View Services</Link>
          </Button>
          <Button variant={"secondary"} className="rounded-full" asChild>
            <Link href="/portfolio">View Projects</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mb-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="
                group
                relative
                rounded-2xl
                border border-foreground/10
                bg-background/40
                text-center
                transition-all
                duration-300
                hover:border-foreground/30
                hover:bg-background/60
                h-60 w-full
              "
            >
              {/* subtle glow */}
              {/* <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-2xl
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  bg-gradient-to-b
                  from-white/5
                  to-transparent
                "
              /> */}

              <div
                className="relative z-10 flex flex-col items-center gap-4 top-1/2 left-1/2
                  -translate-x-1/2 -translate-y-1/2 absolute"
              >
                <Icon
                  className="
                    h-6 w-6
                    text-foreground/70
                    transition-colors
                    duration-300
                    group-hover:text-foreground
                  "
                />

                <p
                  className="
                    text-sm
                    font-medium
                    text-foreground/70
                    text-center
                    max-w-32
                    min-h-10
                    transition-colors
                    duration-300
                    group-hover:text-foreground
                "
                >
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 flex justify-end">
        <div>
          <TechGrid />
        </div>
      </div> */}
    </section>
  );
};

export default FeatureGrid;
