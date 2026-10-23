import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/lib/projects";
import { getAllServices } from "@/lib/services";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...getAllServices().map((service) => ({
      url: `${siteConfig.url}/services/${service.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...getAllProjectSlugs().map((slug) => ({
      url: `${siteConfig.url}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
