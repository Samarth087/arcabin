import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "";

if (!endpoint) {
  console.warn("NEXT_PUBLIC_HYGRAPH_ENDPOINT is not defined. Data fetching will fail.");
}

export const hygraph = new GraphQLClient(endpoint, {
  headers: {
    ...(process.env.NEXT_PUBLIC_HYGRAPH_TOKEN && {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    }),
  },
});

// Centralized types for Hygraph responses
export interface HygraphProject {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: {
    text: string;
    markdown: string;
    html?: string;
  };
  tags: string[];
  thumbnail: {
    url: string;
  };
  gallery: {
    url: string;
  }[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface HygraphBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: {
    raw: any;
    html: string;
    markdown: string;
    text: string;
  };
  coverImage: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProjectsResponse {
  projects: HygraphProject[];
}

export interface BlogPostsResponse {
  blogPosts: HygraphBlogPost[];
}
