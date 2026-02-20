import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { hygraph, ProjectsResponse } from "@/lib/hygraph";
import { QUERY_KEYS } from "@/lib/query-keys";

export const PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      id
      name
      shortDescription
      description {
        text
        markdown
        html
      }
      thumbnail {
        url
      }
      tags
      slug
      gallery {
        url
      }
      seoTitle
      seoDescription
    }
  }
`

export const useProjects = () => {
  return useQuery({
    queryKey: QUERY_KEYS.projects.all,
    queryFn: async () => {
      const data = await hygraph.request<ProjectsResponse>(PROJECTS_QUERY);
      return data.projects;
    },
  });
};
const GET_PROJECT_QUERY = gql`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      id
      name
      slug
    }
  }
`;

export const useProject = (slug: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.projects.detail(slug),
    queryFn: async () => {
      if (!slug) return null;
      const data = await hygraph.request<{ project: any }>(GET_PROJECT_QUERY, { slug });
      return data.project;
    },
    enabled: !!slug,
  });
};
