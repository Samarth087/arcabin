import Image from "next/image";
import React from "react";

const CloudLogoSection = () => {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Image
            className="h-8 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/nvidia"
            alt="Nvidia Logo"
            height={32}
            width={32}
            unoptimized
          />
          <Image
            className="h-7 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/google"
            alt="Google Logo"
            height={28}
            width={28}
            unoptimized
          />
          <Image
            className="h-7 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/github"
            alt="GitHub Logo"
            height={28}
            width={28}
            unoptimized
          />
          <Image
            className="h-8 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/nike"
            alt="Nike Logo"
            height={32}
            width={32}
            unoptimized
          />
          <Image
            className="h-7 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/laravel"
            alt="Laravel Logo"
            height={28}
            width={28}
            unoptimized
          />
          <Image
            className="h-10 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/vercel"
            alt="Vercel Logo"
            height={40}
            width={40}
            unoptimized
          />
          <Image
            className="h-8 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/lemonsqueezy"
            alt="Lemon Squeezy Logo"
            height={32}
            width={32}
            unoptimized
          />
          <Image
            className="h-9 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/react"
            alt="React Logo"
            height={36}
            width={36}
            unoptimized
          />
          <Image
            className="h-7 w-fit brightness-0 dark:invert"
            src="https://cdn.simpleicons.org/tailwindcss"
            alt="Tailwind CSS Logo"
            height={28}
            width={28}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default CloudLogoSection;
