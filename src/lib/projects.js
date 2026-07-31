import { projectDetails } from "@/config/project-details";
import { siteConfig } from "@/config/site";

export function getAllProjectSlugs() {
  return siteConfig.projects.items.map((item) => item.id);
}

export function getProjectBySlug(slug) {
  return siteConfig.projects.items.find((item) => item.id === slug) ?? null;
}

export function getProjectDetail(slug) {
  return projectDetails[slug] ?? null;
}
