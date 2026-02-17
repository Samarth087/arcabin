export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image: string;
  tags: string[];
};

const posts: BlogPost[] = [
  {
    slug: "nextjs-architecture-for-small-studios",
    title: "Next.js architecture that scales for small studios",
    description:
      "How to structure a Next.js app so design, content, and SEO can grow without rewrites.",
    publishedAt: "2025-01-01T08:00:00.000Z",
    updatedAt: "2025-01-01T08:00:00.000Z",
    author: "ArkCabin Studio",
    image: "https://arkcabin.com/images/blog/nextjs-architecture-cover.jpg",
    tags: ["Next.js", "Architecture", "Best Practices"],
  },
  {
    slug: "seo-foundations-for-nextjs-service-sites",
    title: "SEO foundations for service websites built with Next.js",
    description:
      "A practical checklist to make service websites indexable, fast, and ready for search.",
    publishedAt: "2025-01-05T08:00:00.000Z",
    updatedAt: "2025-01-05T08:00:00.000Z",
    author: "ArkCabin Studio",
    image: "https://arkcabin.com/images/blog/seo-foundations-cover.jpg",
    tags: ["SEO", "Next.js", "Content"],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

