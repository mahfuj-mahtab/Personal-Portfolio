export const ragKnowledgeBase = {
  heroImage: "/projects/project-three.svg",
  heroImageAlt: "Screenshot of RAG Knowledge Base",
  overview:
    "Internal copilot over company documentation with vector search, citation-backed answers, and an admin ingestion pipeline. Teams ask natural language questions and get answers grounded in their own docs.",
  problem:
    "Company knowledge was scattered across Confluence, Google Docs, and PDFs. Employees spent hours searching for answers that already existed somewhere in internal documentation.",
  solution:
    "Built an internal RAG system that ingests company documents, indexes them with vector embeddings, and serves citation-backed answers through a chat interface. An admin panel manages document ingestion and monitors query quality.",
  features: [
    {
      title: "Document ingestion pipeline",
      description: "Automated parsing of PDFs, web pages, and markdown into searchable chunks.",
    },
    {
      title: "Vector search",
      description: "Semantic similarity search over document embeddings for relevant context retrieval.",
    },
    {
      title: "Citation-backed answers",
      description: "Every answer links to source documents so users can verify information.",
    },
    {
      title: "Admin dashboard",
      description: "Manage document sources, monitor ingestion status, and review query logs.",
    },
    {
      title: "Access control",
      description: "Team-based permissions determine which documents each user can query.",
    },
  ],
  screenshots: [
    {
      label: "Chat",
      image: "/projects/project-three.svg",
      imageAlt: "RAG Knowledge Base chat interface",
    },
    {
      label: "Admin",
      image: "/projects/project-three.svg",
      imageAlt: "RAG Knowledge Base admin ingestion panel",
    },
    {
      label: "Search",
      image: "/projects/project-three.svg",
      imageAlt: "RAG Knowledge Base vector search results",
    },
  ],
  video: null,
  challenges: [
    {
      title: "Chunking quality across formats",
      description:
        "Different document formats need different parsing strategies. Built format-specific extractors with fallback to raw text.",
    },
    {
      title: "Citation accuracy",
      description:
        "Ensuring retrieved chunks actually support the generated answer required tuning retrieval thresholds and adding relevance scoring.",
    },
  ],
  lessonsLearned: [
    "Retrieval quality is 80% of RAG performance — invest in chunking and indexing before tuning the LLM.",
    "Citation links build user trust and reduce support burden from incorrect answers.",
  ],
  tech: [
    "Python",
    "LangChain",
    "React",
    "PostgreSQL",
    "pgvector",
    "OpenAI",
    "Celery",
    "Docker",
  ],
};
