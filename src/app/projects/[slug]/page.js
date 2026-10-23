import { notFound } from "next/navigation";

import { ProjectDetailView } from "@/components/project-detail-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectDetail,
} from "@/lib/projects";
import { JsonLd, projectJsonLd } from "@/lib/seo";

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
  const path = `/projects/${slug}`;

  return {
    title: project.name,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: project.name,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,
      creator: siteConfig.twitter,
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
      <JsonLd data={projectJsonLd({ slug, project, detail })} />
      <SiteHeader />
      <ProjectDetailView project={project} detail={detail} />
      <SiteFooter />
    </>
  );
}
