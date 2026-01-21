"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

type SpotlightButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightButton() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full bg-zinc-900/60 p-[2.5px] dark:bg-zinc-800/60">
      {/* Border spotlight */}
      <Spotlight
        size={220}
        className="blur-3xl from-blue-500/80
    via-blue-400/70
    to-blue-300/60 dark:from-blue-200 dark:via-blue-300 dark:to-blue-400 "
      />

      {/* Button surface */}
      <div className="relative z-10 rounded-full bg-white px-6 py-2 text-sm font-medium text-black dark:bg-black dark:text-white">
        Design In Details
      </div>
    </div>
  );
}
