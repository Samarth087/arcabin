import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { hygraph, SectionsResponse, HygraphSection } from "@/lib/hygraph";
import { QUERY_KEYS } from "@/lib/query-keys";

export const GET_SECTION_BY_TITLE_QUERY = gql`
  query GetSectionByTitle($name: String!) {
    sections(where: { name: $name }) {
      id
      name
      type
      content
      image {
        url
      }
      backgroundImage {
        url
      }
    }
  }
`;

export const useSectionByName = (name: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.sections.byTitle(name),
    queryFn: async () => {
      if (!name) return null;
      const data = await hygraph.request<SectionsResponse>(GET_SECTION_BY_TITLE_QUERY, { name });
      return data.sections?.[0] || null;
    },
    enabled: !!name,
  });
};
