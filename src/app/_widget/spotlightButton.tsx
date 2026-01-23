"use client";

import { GlowCard } from "@/components/ui/spotlight";

export default function Page() {
  return (
     <div className="flex h-screen items-center justify-center bg-black">
      <GlowCard className="h-[260px] w-[420px] p-6">
        <p className="text-white text-sm">
          Blue proximity glow ✨
        </p>
      </GlowCard>
    </div>
  );
}
