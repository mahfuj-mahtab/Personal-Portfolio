export const aiCustomerSupportSaas = {
  heroImage: "/projects/project-one.svg",
  heroImageAlt: "AI Customer Support SaaS desktop view",
  overview:
    "Built a multi-tenant AI customer support platform that lets businesses upload PDFs and websites to create an AI chatbot. The platform uses RAG for context-aware answers, streams responses in real time, and tracks usage per tenant.",
  problem:
    "Support teams were drowning in repetitive questions while product docs lived across PDFs and scattered web pages, making it hard to give fast, consistent answers at scale.",
  solution:
    "Shipped a multi-tenant SaaS where each business ingests their knowledge base, trains a RAG-backed chatbot, and serves streaming answers with usage tracking, JWT-secured APIs, and Celery workers for ingestion and embeddings.",
  features: [
    {
      title: "Multi-tenant architecture",
      description: "Each business gets an isolated workspace with its own knowledge base and chatbot configuration.",
    },
    {
      title: "Document ingestion",
      description: "Upload PDFs and crawl websites to build a searchable knowledge base automatically.",
    },
    {
      title: "RAG-powered answers",
      description: "Retrieval-augmented generation pulls relevant context before generating responses.",
    },
    {
      title: "Streaming responses",
      description: "Real-time token streaming for a conversational chat experience.",
    },
    {
      title: "Usage tracking",
      description: "Per-tenant analytics on query volume, response times, and token consumption.",
    },
    {
      title: "Background workers",
      description: "Celery handles document parsing, embedding generation, and index updates asynchronously.",
    },
  ],
  screenshots: [
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
  video: { youtubeId: "dQw4w9WgXcQ" },
  challenges: [
    {
      title: "Embedding quality for diverse document formats",
      description:
        "PDFs with tables, images, and mixed layouts produce inconsistent text extraction. Built a preprocessing pipeline with format-specific parsers.",
    },
    {
      title: "Streaming latency",
      description:
        "RAG retrieval adds latency before the first token streams. Optimized with embedding cache and pre-filtered vector indexes.",
    },
  ],
  lessonsLearned: [
    "Chunking strategy directly impacts answer quality — semantic boundaries beat fixed token splits.",
    "Tenant isolation for vector search requires filtered indexes, not just application-level filtering.",
    "Streaming UX matters: users tolerate slightly slower answers when they see tokens arriving immediately.",
  ],
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
};
