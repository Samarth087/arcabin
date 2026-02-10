import Image from "next/image";

interface StackCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export const StackCard = ({
  image,
  title,
  description,
  index,
}: StackCardProps) => {
  return (
    <div
      className="
        stack-card stack-item
        absolute inset-0
        w-screen h-screen
        overflow-hidden
        will-change-transform
      "
      data-index={index}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover z-1"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-2
          bg-linear-to-b
          from-black/20
          via-black/40
          to-black/70
        "
      />

      {/* Content */}
      <div
        className="
          stack-content
          absolute z-3
          left-[6vw] bottom-[8vh]
          max-w-[520px]
          text-white

          opacity-0
          translate-y-[30px]
          will-change-[opacity,transform]
        "
      >
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] mb-4">
          {title}
        </h2>

        <p className="text-base text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
};
