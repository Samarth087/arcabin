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

const siteName = "ArkCabin IT Services Pvt Ltd";

const staticPages: Record<StaticPageKey, PageMetadataInput> = {
  home: {
    path: "/",
    title: "ArkCabin — SaaS Development, AI Automation & Startup Product Studio",
    description:
      "ArkCabin builds high-growth SaaS products, custom web apps, and intelligent AI automation for startups. We specialize in Next.js, motion design, and high-performance software engineering.",
    image: "/images/hero-dashboar-sidebar.png",
    keywords: [
      "SaaS Development Agency",
      "Next.js Startup Studio",
      "AI Automation for Business",
      "Custom Software Development",
      "MVP Development for Startups",
      "Web App Engineering",
      "High-End Web Animations",
      "Specialized WordPress Solutions",
      "Next.js Performance Optimization",
    ],
  },
  about: {
    path: "/about",
    title: "About ArkCabin — Engineering Digital Excellence",
    description:
      "A specialized team of engineers and designers dedicated to building the next generation of SaaS and digital products. Learn about our process and mission.",
  },
  services: {
    path: "/services",
    title: "Services — SaaS, Custom Apps & AI Automation | ArkCabin",
    description:
      "From MVP development to enterprise AI automation. Specializing in high-performance Next.js apps, SaaS architecture, premium WordPress, and motion design.",
  },
  portfolio: {
    path: "/portfolio",
    title: "Portfolio — SaaS Products & Custom Solutions | ArkCabin",
    description:
      "Showcasing high-impact SaaS platforms, automated systems, and performance-first web applications built for startups and global brands.",
  },
  pricing: {
    path: "/pricing",
    title: "Transparent SaaS & Web Development Pricing | ArkCabin",
    description:
      "Fair and flexible pricing for startup MVPs, custom software, and specialized web engineering services.",
  },
  blog: {
    path: "/blog",
    title: "Insights on SaaS, AI & Software Engineering | ArkCabin Blog",
    description:
      "Technical deep-dives and industry insights on building modern SaaS, integrating AI, and mastering frontend performance.",
  },
  contact: {
    path: "/contact",
    title: "Let's Build Your Vision — Contact ArkCabin",
    description:
      "Partner with ArkCabin for your next SaaS project, AI integration, or high-performance web application. Get started today.",
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy | ArkCabin",
    description:
      "Transparent information on how we handle data and respect your privacy.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service | ArkCabin",
    description:
      "The terms and conditions governing our digital products and consulting services.",
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

