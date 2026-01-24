import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, GalleryVerticalEnd, Search } from "lucide-react";
import React from "react";

const HeroSectionHeader = () => {
  return (
    <header className="w-full px-3 py-2 bg-background border-b rounded-t-md flex items-center justify-between">
      <div className="bg-secondary rounded-sm w-fit flex items-center">
        <div className="py-1.5 pl-2 pr-2.5 border-r">
          <GalleryVerticalEnd className="size-4" />
        </div>
        <div className="py-1.5 pl-1 pr-2">
          <ChevronLeft className="size-4" />
        </div>
      </div>

      <div>
        <div className="bg-secondary min-w-xl flex items-center gap-2 py-1.5 justify-center rounded-sm">
          <Search className="size-4" />
          <p className="text-sm">Development</p>
        </div>
      </div>

      <div>
        <AvatarGroup>
          <Avatar className="size-6">
            <AvatarImage src="/images/profile-img-1.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-6">
            <AvatarImage src="/images/profile-img-2.jpg" alt="@shadcn" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </header>
  );
};

export default HeroSectionHeader;
