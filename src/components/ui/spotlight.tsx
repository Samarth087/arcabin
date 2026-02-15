"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
};

export function GlowCard({
  className,
  children,
  radius = 320,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 40 });
  const o = useSpring(opacity, { stiffness: 200, damping: 30 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // glow strength based on distance
      const strength = Math.max(0, 1 - distance / radius);
      opacity.set(strength);

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [radius]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "bg-zinc-950 border border-zinc-800",
        className
      )}
    >
      {/* BLUE GLOW */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: o,
          background: `
            radial-gradient(
              420px circle at ${x}px ${y}px,
              rgba(59,130,246,0.45),
              rgba(59,130,246,0.15) 40%,
              transparent 70%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}