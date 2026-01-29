"use client";

export default function HeroCardsGrid() {
  return (
    <div className="relative grid grid-cols-3 grid-rows-[180px_180px] gap-4 h-full p-4">
      {/* Card 1 */}
      <div className="rounded-xl border border-white/10 bg-[#e5d9f6] p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center text-background">
          <p className="text-sm font-medium">Analytics</p>
          <span className="text-xs font-medium">01</span>
        </div>
        <div className="flex justify-between items-center text-background">
          <span className="text-xs font-medium">01</span>
          <p className="text-sm font-medium">Analytics</p>
        </div>
      </div>

      {/* Card 2 - wide */}
      <div className="col-span-2 rounded-xl border border-white/10 bg-[#ffd2f3] p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center text-background">
          <p className="text-sm font-medium">Performance</p>
          <span className="text-xs font-medium">02</span>
        </div>
        <div className="flex justify-between items-center text-background">
          <span className="text-xs font-medium">02</span>
          <p className="text-sm font-medium">Performance</p>
        </div>
      </div>

      {/* Card 3 - tall */}
      <div className="col-span-2 rounded-xl border border-white/10 bg-[#fcdca6] p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center text-background">
          <p className="text-sm font-medium">Design System</p>
          <span className="text-xs font-medium">03</span>
        </div>
        <div className="flex justify-between items-center text-background">
          <span className="text-xs font-medium">03</span>
          <p className="text-sm font-medium">Design System</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="rounded-xl border border-white/10 bg-[#e4d9f6] p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center text-background">
          <p className="text-sm font-medium">Components</p>
          <span className="text-xs font-medium">04</span>
        </div>
        <div className="flex justify-between items-center text-background">
          <span className="text-xs font-medium">04</span>
          <p className="text-sm font-medium">Components</p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-span-3 rounded-xl border border-white/10 bg-[#d2ffea] p-4 flex flex-col justify-between shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center text-background">
          <p className="text-sm font-medium">Deployment</p>
          <span className="text-xs font-medium">05</span>
        </div>
      </div>
    </div>
  );
}
