import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { hygraph, ProjectsResponse } from "@/lib/hygraph";
import { PROJECTS_QUERY } from "@/hooks/useProjects";
import { QUERY_KEYS } from "@/lib/query-keys";
import { getStaticPageMetadata } from "@/lib/seo";
import { PortfolioView } from "./_view/portfolio.view";

export const metadata: Metadata = getStaticPageMetadata("portfolio");

export default async function PortfolioPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.projects.all,
    queryFn: async () => {
      const data = await hygraph.request<ProjectsResponse>(PROJECTS_QUERY);
      return data.projects;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PortfolioView />
    </HydrationBoundary>
  );
}
