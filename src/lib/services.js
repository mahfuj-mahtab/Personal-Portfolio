import { siteConfig } from "@/config/site";
import { getProjectBySlug } from "@/lib/projects";

export function getAllServices() {
  return siteConfig.services.items;
}

export function getServiceBySlug(slug) {
  return getAllServices().find((service) => service.id === slug) ?? null;
}

export function getRelatedProjects(service) {
  return (service.seo?.relatedProjects ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);
}
