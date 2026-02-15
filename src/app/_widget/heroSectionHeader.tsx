import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { ChevronLeft, GalleryVerticalEnd, Search } from "lucide-react";

const HeroSectionHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-background rounded-t-md">
      {/* Left cluster: Editor chrome + navigation */}
      <div className="flex items-center gap-4">
        {/* VS Code dots */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/10" />

        {/* Navigation controls */}
        <div className="bg-secondary rounded-sm flex items-center">
          <div className="py-1.5 px-2 border-r border-white/10">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="py-1.5 px-2">
            <ChevronLeft className="size-4" />
          </div>
        </div>
      </div>

      {/* Center: File Name */}
      <div className="hidden md:flex">
        <div className="bg-secondary flex items-center gap-2 py-1.5 px-3 rounded-sm min-w-[220px] justify-center">
          <span className="text-xs text-zinc-400">CardLayout.tsx</span>
        </div>
      </div>

      {/* Right: Avatars */}
      <div className="flex items-center">
        <AvatarGroup>
          <Avatar className="size-6">
            <AvatarImage src="/images/profile-img-1.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-6">
            <AvatarImage src="/images/profile-img-2.jpg" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </header>
  );
};

export default HeroSectionHeader;
