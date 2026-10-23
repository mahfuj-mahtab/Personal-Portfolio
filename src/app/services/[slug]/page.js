import { notFound } from "next/navigation";

import { ServiceDetailView } from "@/components/service-detail-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { JsonLd, serviceJsonLd } from "@/lib/seo";
import {
  getAllServices,
  getRelatedProjects,
  getServiceBySlug,
} from "@/lib/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const path = `/services/${slug}`;

  return {
    title: service.name,
    description: service.seo.lead,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: service.name,
      description: service.seo.lead,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}, ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.name,
      description: service.seo.lead,
      creator: siteConfig.twitter,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <SiteHeader />
      <ServiceDetailView
        service={service}
        relatedProjects={getRelatedProjects(service)}
      />
      <SiteFooter />
    </>
  );
}
