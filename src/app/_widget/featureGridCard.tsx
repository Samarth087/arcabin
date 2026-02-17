
import GridCard from "@/components/ui/gridCard";
import {
  Earth,
  Fence,
  Figma,
  Webhook,
} from "lucide-react";

export const TechGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-0 rounded-2xl border border-foreground/10 overflow-hidden">
      <GridCard>
        <Earth className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Figma className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Fence className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Webhook className="h-10 w-10" />
      </GridCard>
      <GridCard>
        <Earth className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Figma className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Fence className="h-10 w-10" />
      </GridCard>

      <GridCard>
        <Webhook className="h-10 w-10" />
      </GridCard>
    </div>
  );
};
