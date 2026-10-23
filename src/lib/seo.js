import { siteConfig } from "@/config/site";

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function emailAddress() {
  const mail = siteConfig.social.find((item) => item.href.startsWith("mailto:"));
  if (!mail) return undefined;
  return mail.href.slice("mailto:".length).split("?")[0];
}

function sameAsProfiles() {
  return siteConfig.social
    .map((item) => item.href)
    .filter((href) => !href.startsWith("mailto:"));
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: siteConfig.role,
        email: emailAddress(),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        sameAs: sameAsProfiles(),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };
}

function breadcrumbList(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectJsonLd({ slug, project, detail }) {
  const url = absoluteUrl(`/projects/${slug}`);
  const description = detail.overview ?? project.description;

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Home", url: siteConfig.url },
        { name: "Projects", url: absoluteUrl("/#projects") },
        { name: project.name, url },
      ]),
      {
        "@type": "CreativeWork",
        name: project.name,
        description,
        url,
        image: detail.heroImage ? absoluteUrl(detail.heroImage) : undefined,
        author: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    ],
  };
}

export function serviceJsonLd(service) {
  const url = absoluteUrl(`/services/${service.id}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Home", url: siteConfig.url },
        { name: "Services", url: absoluteUrl("/#services") },
        { name: service.name, url },
      ]),
      {
        "@type": "Service",
        name: service.name,
        description: service.seo.lead,
        url,
        serviceType: service.name,
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        ...(service.priceRange
          ? {
              offers: {
                "@type": "Offer",
                description: service.priceRange,
              },
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.seo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
