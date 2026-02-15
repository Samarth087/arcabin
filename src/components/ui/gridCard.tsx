import React from "react";
import { cn } from "@/lib/utils"; // optional helper

interface GridCardProps {
  children: React.ReactNode;
  className?: string;
}

const GridCard = ({ children, className }: GridCardProps) => {
  return (
    <div
      className={cn(
        `
        group
        relative
        flex
        aspect-square
        items-center
        justify-center
        border border-foreground/10
        bg-secondary/20
        transition-all
        duration-300
        hover:border-foreground/30
        hover:bg-background/60
        gap-0
        h-32 w-36        `,
        className
      )}
    >
      {/* soft hover glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-b
          from-foreground/10
          to-transparent
        "
      />

      {/* content */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          className="
            transition-all
            duration-300
            text-foreground/60
            group-hover:text-foreground
            group-hover:scale-105
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GridCard;
