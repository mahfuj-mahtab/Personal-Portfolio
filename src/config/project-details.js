export const projectDetails = {
  "ai-customer-support-saas": {
    carousel: [
      {
        label: "Desktop",
        image: "/projects/project-one.svg",
        imageAlt: "AI Customer Support SaaS desktop view",
      },
      {
        label: "Mobile",
        image: "/projects/project-one.svg",
        imageAlt: "AI Customer Support SaaS mobile view",
      },
      {
        label: "Dashboard",
        image: "/projects/project-one.svg",
        imageAlt: "AI Customer Support SaaS admin dashboard",
      },
    ],
    description:
      "Built a multi-tenant AI customer support platform that lets businesses upload PDFs and websites to create an AI chatbot.",
    tech: [
      "Django",
      "DRF",
      "React",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Celery",
      "OpenAI",
      "pgvector",
    ],
    highlights: [
      "Multi-tenant",
      "JWT Authentication",
      "RAG",
      "Streaming responses",
      "Background workers",
      "Usage tracking",
    ],
    video: {
      label: "2-minute Video",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    caseStudy: {
      problem:
        "Support teams were drowning in repetitive questions while product docs lived across PDFs and scattered web pages, making it hard to give fast, consistent answers at scale.",
      solution:
        "Shipped a multi-tenant SaaS where each business ingests their knowledge base, trains a RAG-backed chatbot, and serves streaming answers with usage tracking, JWT-secured APIs, and Celery workers for ingestion and embeddings.",
    },
  },
};
