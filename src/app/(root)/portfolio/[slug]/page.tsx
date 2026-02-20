import { hygraph, HygraphProject } from "@/lib/hygraph";
import { gql } from "graphql-request";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { PROJECTS_QUERY } from "@/hooks/useProjects";
import { ProjectDetailView } from "./_view/project-detail.view";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkcabin.com";
const SITE_NAME = "ArkCabin IT Services Pvt Ltd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const GET_PROJECT_BY_SLUG = gql`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      id
      name
      slug
      shortDescription
      description {
        text
        markdown
        html
      }
      thumbnail {
        url
      }
      gallery {
        url
      }
      tags
      seoTitle
      seoDescription
    }
  }
`;

export async function generateStaticParams() {
  const data = await hygraph.request<{ projects: { slug: string }[] }>(gql`
    query GetProjectSlugs {
      projects {
        slug
      }
    }
  `);
  return data.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await hygraph.request<{ project: HygraphProject }>(GET_PROJECT_BY_SLUG, { slug });
  const project = data.project;

  if (!project) return { title: "Project Not Found" };

  const url = `${BASE_URL}/portfolio/${slug}`;
  const images = project.thumbnail?.url ? [project.thumbnail.url] : [];

  return {
    title: project.seoTitle || `${project.name} | ArkCabin Portfolio`,
    description: project.seoDescription || project.shortDescription,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      type: "website",
      title: project.seoTitle || `${project.name} | ArkCabin Portfolio`,
      description: project.seoDescription || project.shortDescription,
      url,
      images,
      siteName: SITE_NAME,
    },
    twitter: images.length > 0 ? {
      card: "summary_large_image",
      title: project.seoTitle || `${project.name} | ArkCabin Portfolio`,
      description: project.seoDescription || project.shortDescription,
      images,
    } : {
      card: "summary",
      title: project.seoTitle || `${project.name} | ArkCabin Portfolio`,
      description: project.seoDescription || project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const queryClient = getQueryClient();
  const { QUERY_KEYS } = await import("@/lib/query-keys");

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.projects.detail(slug),
    queryFn: async () => {
      const data = await hygraph.request<{ project: HygraphProject }>(GET_PROJECT_BY_SLUG, { slug });
      return data.project;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectDetailWrapper slug={slug} />
    </HydrationBoundary>
  );
}

async function ProjectDetailWrapper({ slug }: { slug: string }) {
  const data = await hygraph.request<{ project: HygraphProject }>(GET_PROJECT_BY_SLUG, { slug });
  const project = data.project;

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
