"use client";

import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { roboto } from "@/app/fonts";

type FeatureRowProps = {
  title: string;
  values: (string | boolean)[];
  type?: "text" | "boolean";
  isLast?: boolean;
};

export default function FeatureRow({
  title,
  values,
  type = "text",
  isLast = false,
}: FeatureRowProps) {
  return (
    <div className={cn(
      "grid grid-cols-4 items-center w-full px-6 py-5 transition-colors hover:bg-muted/30",
      !isLast && "border-b border-border/50",
      roboto.className
    )}>
      {/* Feature Title */}
      <div className="text-sm font-semibold text-foreground/70 tracking-tight">
        {title}
      </div>

      {/* Feature Values */}
      {values.map((value, i) => (
        <div key={i} className="flex justify-center items-center text-center px-4">
          {type === "boolean" ? (
            value ? (
              <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="size-3 text-primary stroke-[3]" />
              </div>
            ) : (
              <Minus className="size-4 text-muted-foreground/30" />
            )
          ) : (
            <span className="text-[13px] font-medium text-foreground/80">
              {value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
