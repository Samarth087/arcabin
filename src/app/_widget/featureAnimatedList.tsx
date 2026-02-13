import { AnimatedList } from "@/components/ui/animated-list";
import { activities, AgencyActivity } from "@/constant/animatedListData";
import React from "react";

export const FeatureAnimatedList = ({
  title,
  description,
  tag,
  color,
  time,
}: AgencyActivity) => {
  return (
    <div
      className="
        relative w-full rounded-xl p-4
        bg-background border border-foreground/10
        backdrop-blur-md
        transition-all duration-300
        hover:border-foreground/20
      "
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs px-2 py-1 rounded-full text-foreground"
          style={{ backgroundColor: color }}
        >
          {tag}
        </span>

        <span className="text-xs text-foreground/40">{time}</span>
      </div>

      <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>

      <p className="text-xs text-foreground/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export function AgencyActivityCard() {
  return (
    <div className="relative w-full h-full rounded-2xl p-6 bg-secondary/40 border border-foreground/10 overflow-hidden">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Live Agency Activity
        </h3>
        <p className="text-sm text-foreground/50">
          Real-time project updates and deployments.
        </p>
      </div>

      <div className="relative h-full overflow-hidden">
        <AnimatedList delay={2500}>
          {activities.map((item, idx) => (
            <FeatureAnimatedList key={idx} {...item} />
          ))}
        </AnimatedList>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-secondary/40 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
