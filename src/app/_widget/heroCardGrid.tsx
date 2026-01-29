"use client";

export default function HeroCardsGrid() {
  return (
    <div className="relative grid grid-cols-3 grid-rows-2 gap-4 h-full p-4">
      {/* Card 1 */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-secondary/80 to-secondary/40 p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <p className="text-sm font-medium text-foreground">Analytics</p>
        <span className="text-xs text-muted-foreground">Realtime data</span>
      </div>

      {/* Card 2 - wide */}
      <div className="col-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <p className="text-sm font-medium text-foreground">Performance</p>
        <span className="text-xs text-muted-foreground">
          Optimized rendering
        </span>
      </div>

      {/* Card 3 - tall */}
      <div className="row-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <p className="text-sm font-medium text-foreground">Design System</p>
        <span className="text-xs text-muted-foreground">Consistent UI</span>
      </div>

      {/* Card 4 */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <p className="text-sm font-medium text-foreground">Components</p>
        <span className="text-xs text-muted-foreground">Reusable blocks</span>
      </div>

      {/* Card 5 */}
      <div className="rounded-xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <p className="text-sm font-medium text-foreground">Deployment</p>
        <span className="text-xs text-muted-foreground">One-click publish</span>
      </div>
    </div>
  );
}
