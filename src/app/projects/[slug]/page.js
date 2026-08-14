import { notFound } from "next/navigation";

import { ProjectDetailView } from "@/components/project-detail-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectDetail,
} from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const detail = getProjectDetail(slug);

  if (!project || !detail) {
    return { title: "Project not found" };
  }

  const description = detail.overview ?? project.description;

  return {
    title: `${project.name} | Mahfuj Mahtab Mohot`,
    description,
    openGraph: {
      title: project.name,
      description,
      images: detail.heroImage
        ? [{ url: detail.heroImage, alt: detail.heroImageAlt }]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const detail = getProjectDetail(slug);

  if (!project || !detail) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ProjectDetailView project={project} detail={detail} />
      <SiteFooter />
    </>
  );
}
