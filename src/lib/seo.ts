import type { Metadata } from "next";

type ArticleMetadataInput = {
  slug: string;
  basePath: string;
  title: string;
  description: string;
  image: string;
};

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
};

type StaticPageKey =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "pricing"
  | "blog"
  | "contact"
  | "privacy"
  | "terms";

const defaultBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkcabin.com";

const siteName = "ArkCabin";

const staticPages: Record<StaticPageKey, PageMetadataInput> = {
  home: {
    path: "/",
    title: "Design. Develop. Automate. — Next.js Web Studio",
    description:
      "ArkCabin is a design-led Next.js agency delivering websites, apps, and AI automation. Hire us for UX, frontend engineering, and performance.",
    image: "/images/hero-dashboar-sidebar.png",
    keywords: [
      "Web Design Agency",
      "Next.js Development",
      "Frontend Engineering",
      "UX Design",
      "AI Automation",
      "TailwindCSS",
      "shadcn/ui",
    ],
  },
  about: {
    path: "/about",
    title: "About ArkCabin",
    description:
      "Learn about ArkCabin, a design-led Next.js studio focused on fast, crafted web experiences.",
  },
  services: {
    path: "/services",
    title: "Services",
    description:
      "Explore ArkCabin services: design, Next.js development, frontend engineering, and automation.",
  },
  portfolio: {
    path: "/portfolio",
    title: "Portfolio",
    description:
      "Selected ArkCabin projects and case studies showcasing web design and Next.js implementation.",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    description:
      "Transparent pricing for ArkCabin web design, Next.js development, and ongoing support.",
  },
  blog: {
    path: "/blog",
    title: "Blog",
    description:
      "Articles and notes from ArkCabin on design, engineering, and building with Next.js.",
  },
  contact: {
    path: "/contact",
    title: "Contact Us",
    description:
      "Get in touch with ArkCabin for projects, support, or inquiries.",
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How ArkCabin handles analytics, contact information, and other data on this site.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service",
    description:
      "The basic terms of using the ArkCabin website and any related services.",
  },
};

export function createArticleMetadata(
  input: ArticleMetadataInput,
): Metadata {
  const base = defaultBaseUrl;
  const url = `${base}${input.basePath}/${input.slug}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: `${input.basePath}/${input.slug}`,
    },
    openGraph: {
      type: "article",
      title: input.title,
      description: input.description,
      url,
      images: [input.image],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [input.image],
    },
  };
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const base = defaultBaseUrl;
  const url = `${base}${input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    keywords: input.keywords,
    openGraph: {
      type: "website",
      title: input.title,
      description: input.description,
      url,
      images: input.image ? [input.image] : undefined,
      siteName,
    },
    twitter: input.image
      ? {
          card: "summary_large_image",
          title: input.title,
          description: input.description,
          images: [input.image],
        }
      : {
          card: "summary",
          title: input.title,
          description: input.description,
        },
  };
}

export function getStaticPageMetadata(key: StaticPageKey): Metadata {
  return createPageMetadata(staticPages[key]);
}

export function getStaticPageUrl(key: StaticPageKey): string {
  const base = defaultBaseUrl;
  const config = staticPages[key];
  return `${base}${config.path}`;
}

export type { StaticPageKey };

