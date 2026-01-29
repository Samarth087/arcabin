import Image from "next/image";
import React from "react";

const CloudLogoSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia Logo"
            height="20"
            width="500"
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column Logo"
            height="16"
            width="500"
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height="16"
            width="500"
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike Logo"
            height="20"
            width="500"
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel Logo"
            height="16"
            width="500"
          />
          <Image
            className="h-7 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly Logo"
            height="28"
            width="500"
          />
          <Image
            className="h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy Logo"
            height="20"
            width="500"
          />
          <Image
            className="h-6 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI Logo"
            height="24"
            width="500"
          />
          <Image
            className="h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            height="16"
            width="500"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudLogoSection;
