import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import React from "react";

const MarqueeSection = () => {
  const testimonials = [
    {
      img: "/images/web-ui-1.webp",
    },
    {
      img: "/images/web-ui-2.webp",
    },
    {
      img: "/images/web-ui-3.webp",
    },
    {
      img: "/images/web-ui-4.webp",
    },
    {
      img: "/images/web-ui-5.webp",
    },
    {
      img: "/images/web-ui-6.webp",
    },
    {
      img: "/images/web-ui-7.webp",
    },
    {
      img: "/images/web-ui-8.webp",
    },
    {
      img: "/images/web-ui-9.webp",
    },
    {
      img: "/images/web-ui-10.webp",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden pt-12">
      {/* Marquee moving left to right (default) */}
      <Marquee pauseOnHover repeat={3} className="[--duration:120s]">
        {testimonials.map((review, index) => (
          <div key={index}>
            <Image
              src={review.img}
              alt={`Screenshot ${index + 1}`}
              width={350}
              height={250}
            />
          </div>
        ))}
      </Marquee>
      {/* Marquee moving right to left (reverse) */}
      <Marquee pauseOnHover reverse repeat={3} className="[--duration:120s]">
        {testimonials.map((review, index) => (
          <div key={index}>
            <Image
              src={review.img}
              alt={`Screenshot ${index + 1}`}
              width={350}
              height={250}
            />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover repeat={3} className="[--duration:120s]">
        {testimonials.map((review, index) => (
          <div key={index}>
            <Image
              src={review.img}
              alt={`Screenshot ${index + 1}`}
              width={350}
              height={250}
            />
          </div>
        ))}
      </Marquee>
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
