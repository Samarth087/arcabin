import { Marquee } from "@/components/ui/marquee";
import { useSectionByName } from "@/hooks/useSections";
import Image from "next/image";
import React from "react";

const MarqueeSection = () => {
  const { data: section, isLoading } = useSectionByName("Project Gallery");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Fallback images if section data is not available yet
  const defaultImages = React.useMemo(() => [
    { url: "/images/web-ui-1.webp" },
    { url: "/images/web-ui-2.webp" },
    { url: "/images/web-ui-3.webp" },
    { url: "/images/web-ui-4.webp" },
    { url: "/images/web-ui-5.webp" },
  ], []);

  const displayImages = React.useMemo(() =>
    section?.image && section.image.length > 0
      ? section.image
      : (isLoading ? [] : defaultImages),
    [section, isLoading, defaultImages]
  );

  // Helper function to shuffle an array
  const shuffle = (array: any[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // Generate randomized orders for each row, only on client to avoid hydration mismatch
  const row1Images = React.useMemo(() => (mounted ? shuffle(displayImages) : displayImages), [displayImages, mounted]);
  const row2Images = React.useMemo(() => (mounted ? shuffle(displayImages) : displayImages), [displayImages, mounted]);
  const row3Images = React.useMemo(() => (mounted ? shuffle(displayImages) : displayImages), [displayImages, mounted]);

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden pt-12">
      {isLoading && !section ? (
        <div className="w-full flex flex-col gap-1 animate-pulse">
          <div className="h-[250px] w-full bg-white/5 mb-2" />
          <div className="h-[250px] w-full bg-white/5 mb-2" />
          <div className="h-[250px] w-full bg-white/5" />
        </div>
      ) : (
        <>
          {/* Marquee moving left to right (default) */}
          <Marquee pauseOnHover repeat={3} className="[--duration:120s]">
            {row1Images.map((img, index) => (
              <div key={img.url + '-1'} className="mx-2">
                <Image
                  src={img.url}
                  alt={`Gallery Image ${index + 1}`}
                  width={350}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>
          {/* Marquee moving right to left (reverse) */}
          <Marquee pauseOnHover reverse repeat={3} className="[--duration:120s]">
            {row2Images.map((img, index) => (
              <div key={img.url + '-2'} className="mx-2">
                <Image
                  src={img.url}
                  alt={`Gallery Image ${index + 1}`}
                  width={350}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover repeat={3} className="[--duration:120s]">
            {row3Images.map((img, index) => (
              <div key={img.url + '-3'} className="mx-2">
                <Image
                  src={img.url}
                  alt={`Gallery Image ${index + 1}`}
                  width={350}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>
        </>
      )}
      {/* Stylish gradient overlays */}
      <div
        className="pointer-events-none
            absolute left-0 top-10 h-1/3 w-[55%]
            bg-background
            [mask-image:linear-gradient(to_right,black, black_30%, transparent)]
            [-webkit-mask-image:linear-gradient(to_right,black,black_60%,transparent)]"
      ></div>
      <div
        className="pointer-events-none
            absolute left-0 top-[35%] h-1/3 w-[45%]
            bg-background
            [mask-image:linear-gradient(to_right,black, black_30%, transparent)]
            [-webkit-mask-image:linear-gradient(to_right,black,black_50%,transparent)]"
      ></div>
      {/* <div
        className="
    pointer-events-none
    absolute right-0 top-[30%] w-[30%] h-[100%]
    bg-background

    mask-radial-farthest-side
    mask-radial-at-[100%_50%]
    mask-radial-from-30%
    mask-radial-via-70%
    mask-radial-to-90%

    mask-no-repeat
  "
      ></div> */}
      <div
        className="pointer-events-none
            absolute right-0 top-1/3 h-1/3 w-[25%]
            bg-background
            [mask-image:linear-gradient(to_left, black, black_30%, transparent)]
            [-webkit-mask-image:linear-gradient(to_left,black,black_60%,transparent)]"
      ></div>
      <div
        className="pointer-events-none
            absolute right-0 top-2/3 h-1/3 w-[45%]
            bg-background
            [mask-image:linear-gradient(to_left, black, black_30%, transparent)]
            [-webkit-mask-image:linear-gradient(to_left,black,black_60%,transparent)]"
      ></div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent"></div>
    </div>
  );
};

export default MarqueeSection;
