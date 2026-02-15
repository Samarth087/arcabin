import Image from "next/image";
import React from "react";

const CloudLogoSection = () => {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {[
            { slug: "nextdotjs", label: "Next.js" },
            { slug: "wordpress", label: "WordPress" },
            { slug: "laravel", label: "Laravel" },
            { slug: "fastapi", label: "FastAPI" },
            { slug: "react", label: "React" },
            { slug: "flutter", label: "Flutter" },
            { slug: "vuedotjs", label: "Vue.js" },
            { slug: "nodedotjs", label: "Node.js" },
            { slug: "express", label: "Express" },
            { slug: "nestjs", label: "NestJS" },
            { slug: "fastify", label: "Fastify" },
            { slug: "postgresql", label: "PostgreSQL" },
            { slug: "mongodb", label: "MongoDB" },
            { slug: "django", label: "Django" },
            { slug: "redis", label: "Redis" },
            { slug: "tailwindcss", label: "Tailwind CSS" },
          ].map((t) => (
            <figure key={t.slug} className="flex flex-col items-center gap-2">
              <Image
                className="h-8 w-fit brightness-0 dark:invert"
                src={`https://cdn.simpleicons.org/${t.slug}`}
                alt={`${t.label} Logo`}
                height={32}
                width={32}
                unoptimized
              />
              <figcaption className="text-xs text-foreground/60">{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudLogoSection;
