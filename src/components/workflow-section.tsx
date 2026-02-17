import { cn } from "@/lib/utils";
import { RotateCcw, SquareDashed, Command } from "lucide-react";
import type React from "react";

export interface WorkflowItem {
    title: string;
    description: string;
    icon?: React.ElementType;
    stepNumber?: string;
}

const defaultItems: WorkflowItem[] = [
    {
        title: "Auto-Save Everything",
        description: "Write without worry, every time.",
        icon: RotateCcw,
    },
    {
        title: "Drag-and-Drop Blocks",
        description: "Rearrange sections with the block editor.",
        icon: SquareDashed,
    },
    {
        title: "Keyboard Shortcuts",
        description: "Speed up your workflow with quick keys.",
        icon: Command,
    },
];

export function WorkflowSection({
    title = "Ensuring your speedy workflow",
    items = defaultItems,
    className,
}: {
    title?: string;
    items?: WorkflowItem[];
    className?: string;
}) {
    const columns = items.length <= 3 ? items.length : 3;

    return (
        <section className={cn("py-24 px-4 bg-background relative overflow-visible", className)}>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            <div className="max-w-6xl mx-auto relative z-10 overflow-visible">
                <h2 className="text-3xl md:text-5xl font-medium text-center mb-20 text-white tracking-tight">
                    {title}
                </h2>

                <div className="relative overflow-visible">
                    {/* Main Grid Container with dashed borders - Right and Bottom boundaries */}
                    <div className={cn(
                        "grid grid-cols-1 border-r border-b border-dashed border-white/15 relative overflow-visible",
                        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
                    )}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "relative p-10 md:p-14 transition-all duration-500 hover:bg-white/[0.02] group border-t border-l border-dashed border-white/15 overflow-visible"
                                )}
                            >
                                {/* Robust Anchored Crosshairs - Quadrant Markers for 100% Junction Coverage */}
                                {/* Every item renders markers at all four corners. Overlapping markers are perfectly centered. */}
                                <Crosshair className="absolute top-0 left-0" />
                                <Crosshair className="absolute top-0 right-0" />
                                <Crosshair className="absolute bottom-0 left-0" />
                                <Crosshair className="absolute bottom-0 right-0" />

                                <div className="flex flex-col items-start gap-6 relative z-10">
                                    {item.icon ? (
                                        <div className="flex items-center justify-center size-12 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 transition-colors shadow-2xl">
                                            <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                                        </div>
                                    ) : item.stepNumber ? (
                                        <div className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors font-display italic">
                                            {item.stepNumber}
                                        </div>
                                    ) : null}

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Crosshair({ className }: { className?: string }) {
    return (
        <div className={cn("size-0 flex items-center justify-center overflow-visible select-none z-30 pointer-events-none", className)}>
            {/* Horizontal Line - Longer for better visibility crossing the dashed borders */}
            <div className="absolute h-[1px] w-5 bg-white/40" />
            {/* Vertical Line */}
            <div className="absolute w-[1px] h-5 bg-white/40" />
        </div>
    );
}
