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
    <div className="relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8">
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
    absolute left-0 top-0 h-3/4 w-[55%]
    bg-background
    [mask-image:linear-gradient(to_right,black,black_60%,transparent)]
    [-webkit-mask-image:linear-gradient(to_right,black,black_60%,transparent)]"
      ></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background/95 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background/90 to-transparent"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background/90 to-transparent"></div>
    </div>
  );
};

export default MarqueeSection;
