import type { MetadataRoute } from "next";
import { getStaticPageUrl } from "@/lib/seo";
import { hygraph } from "@/lib/hygraph";
import { gql } from "graphql-request";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkcabin.com").replace(/\/$/, "");

const DYNAMIC_PATHS_QUERY = gql`
  query GetDynamicPaths {
    projects {
      slug
      updatedAt
    }
    blogPosts {
      slug
      updatedAt
    }
  }
`;

interface DynamicPathsResponse {
  projects: { slug: string; updatedAt: string }[];
  blogPosts: { slug: string; updatedAt: string }[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  
  // Fetch dynamic slugs
  let dynamicPaths: DynamicPathsResponse = { projects: [], blogPosts: [] };
  try {
    dynamicPaths = await hygraph.request<DynamicPathsResponse>(DYNAMIC_PATHS_QUERY);
  } catch (error) {
    console.error("Failed to fetch dynamic paths for sitemap:", error);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: getStaticPageUrl("home"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: getStaticPageUrl("pricing"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getStaticPageUrl("about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getStaticPageUrl("services"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getStaticPageUrl("portfolio"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getStaticPageUrl("blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: getStaticPageUrl("contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: getStaticPageUrl("privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getStaticPageUrl("terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const projectPaths: MetadataRoute.Sitemap = dynamicPaths.projects.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPaths: MetadataRoute.Sitemap = dynamicPaths.blogPosts.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.updatedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...projectPaths, ...blogPaths];
}
