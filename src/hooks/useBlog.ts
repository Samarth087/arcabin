import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { hygraph, BlogPostsResponse, HygraphBlogPost } from "@/lib/hygraph";
import { QUERY_KEYS } from "@/lib/query-keys";

export const GET_BLOG_POSTS_QUERY = gql`
  query GetBlogPosts {
    blogPosts(orderBy: updatedAt_DESC) {
      id
      title
      slug
      excerpt
      coverImage {
        url
      }
      publishedAt
      createdAt
    }
  }
`;

export const GET_BLOG_POST_QUERY = gql`
  query GetBlogPost($slug: String!) {
    blogPost(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      content {
        raw
        html
        markdown
        text
      }
      coverImage {
        url
      }
      publishedAt
      createdAt
      seoTitle
      seoDescription
    }
  }
`;

export const useBlogPosts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.blog.all,
    queryFn: async () => {
      const data = await hygraph.request<BlogPostsResponse>(GET_BLOG_POSTS_QUERY);
      return data.blogPosts;
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.blog.detail(slug),
    queryFn: async () => {
      if (!slug) return null;
      const data = await hygraph.request<{ blogPost: HygraphBlogPost }>(GET_BLOG_POST_QUERY, { slug });
      return data.blogPost;
    },
    enabled: !!slug,
  });
};
