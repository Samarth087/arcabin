import { hygraph, HygraphProject } from "@/lib/hygraph";
import { gql } from "graphql-request";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "./_view/project-detail.view";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await hygraph.request<{ project: HygraphProject }>(GET_PROJECT_BY_SLUG, { slug });
    const project = data.project;

    if (!project) return { title: "Project Not Found" };

    return {
        title: project.seoTitle || `${project.name} | ArkCabin Portfolio`,
        description: project.seoDescription || project.shortDescription,
        openGraph: {
            images: [project.thumbnail.url],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const data = await hygraph.request<{ project: HygraphProject }>(GET_PROJECT_BY_SLUG, { slug });
    const project = data.project;

    if (!project) {
        notFound();
    }

    return <ProjectDetailView project={project} />;
}
