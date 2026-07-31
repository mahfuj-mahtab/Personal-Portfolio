export const siteConfig = {
  brand: "Mohot",
  name: "Mahfuj Mahtab Mohot",
  role: "AI & Full-Stack Software Engineer",
  tagline:
    "I build AI-powered web and mobile applications that help businesses automate work and grow faster.",
  about: [
    {
      question: "Who are you?",
      answer:
        "I'm a software engineer who ships production systems across web and mobile—from backend APIs to user-facing apps.",
    },
    {
      question: "What do you specialize in?",
      answer:
        "AI-powered features, Django backends, React Native apps, and integrations that turn manual workflows into reliable automation.",
    },
    {
      question: "Who do you help?",
      answer:
        "Startups and businesses that need to move fast: founders, product teams, and operators who want measurable impact without bloated process.",
    },
    {
      question: "Why should someone hire you?",
      answer:
        "You get someone who owns problems end-to-end, writes maintainable code, communicates clearly, and delivers on remote timelines.",
    },
  ],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/yourhandle",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourhandle",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/yourhandle",
      icon: "twitter",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      icon: "mail",
    },
  ],
  cv: {
    label: "Download CV",
    href: "/cv.pdf",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
  ],
  footer: {
    tagline: "AI & Full-Stack Software Engineer",
  },
  heroVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  techStack: {
    title: "Tech Stack",
    description:
      "Tools and platforms I use across backend, frontend, DevOps, and AI.",
    rows: [
      {
        direction: "ltr",
        items: [
          { name: "Python", icon: "python" },
          { name: "Django", icon: "django" },
          { name: "DRF", icon: "drf" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Celery", icon: "celery" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React Native", icon: "reactnative" },
          { name: "Node.js", icon: "nodejs" },
        ],
      },
      {
        direction: "rtl",
        items: [
          { name: "Docker", icon: "docker" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "AWS", icon: "aws" },
          { name: "Linux", icon: "linux" },
          { name: "Nginx", icon: "nginx" },
          { name: "Redis", icon: "redis" },
          { name: "OpenAI", icon: "openai" },
          { name: "LangChain", icon: "langchain" },
          { name: "Hugging Face", icon: "huggingface" },
          { name: "PyTorch", icon: "pytorch" },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    description: "Selected work — product builds, APIs, and AI features.",
    items: [
      {
        id: "ai-customer-support-saas",
        name: "AI Customer Support SaaS",
        description:
          "Multi-tenant platform for businesses to upload PDFs and websites and deploy an AI support chatbot with RAG and streaming.",
        image: "/projects/project-one.svg",
        imageAlt: "Screenshot of AI Customer Support SaaS",
        live: { label: "Live Demo", href: "https://example.com" },
        github: [
          {
            label: "GitHub",
            href: "https://github.com/yourhandle/ai-customer-support",
          },
        ],
      },
      {
        id: "hrms-mobile",
        name: "HRMS Mobile App",
        description:
          "React Native app for attendance, leave, and payroll visibility. Offline-friendly sync and role-based access.",
        image: "/projects/project-two.svg",
        imageAlt: "Screenshot of HRMS Mobile App",
        live: null,
        github: [
          {
            label: "Mobile",
            href: "https://github.com/yourhandle/hrms-mobile",
          },
        ],
      },
      {
        id: "rag-knowledge-base",
        name: "RAG Knowledge Base",
        description:
          "Internal copilot over company docs with vector search, citation-backed answers, and admin ingestion pipeline.",
        image: "/projects/project-three.svg",
        imageAlt: "Screenshot of RAG Knowledge Base",
        live: { label: "Demo", href: "https://example.com/demo" },
        github: [
          {
            label: "Monorepo",
            href: "https://github.com/yourhandle/rag-knowledge-base",
          },
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    description: "Roles and impact — condensed from my career.",
    items: [
      {
        id: "example-corp-engineer",
        title: "Software Engineer",
        company: "Example Corp",
        employmentType: "Full-time",
        location: "Remote",
        start: "Jan 2023",
        end: "Present",
        summary:
          "Lead development of customer-facing SaaS features and internal APIs serving multi-tenant workloads.",
        highlights: [
          "Designed and shipped RAG-backed support tooling used by multiple business tenants.",
          "Reduced API latency with caching, query optimization, and background job pipelines.",
        ],
        skills: ["Django", "React", "PostgreSQL", "Docker", "OpenAI"],
      },
      {
        id: "startup-labs-fullstack",
        title: "Full-Stack Developer",
        company: "Startup Labs",
        employmentType: "Contract",
        location: "Dhaka, Bangladesh",
        start: "Jun 2021",
        end: "Dec 2022",
        summary:
          "Built MVPs and production apps for early-stage clients across web and mobile.",
        highlights: [
          "Delivered React Native HR and field apps with offline sync and role-based access.",
          "Integrated payment, auth, and third-party APIs with clear handoff documentation.",
        ],
        skills: ["React Native", "Node.js", "Django", "AWS"],
      },
      {
        id: "freelance-engineer",
        title: "Freelance Software Engineer",
        company: "Self-employed",
        employmentType: "Freelance",
        location: "Remote",
        start: "2019",
        end: "May 2021",
        summary:
          "Partnered with small businesses to automate workflows and ship custom web applications.",
        highlights: [
          "Migrated legacy spreadsheets into Django admin and reporting dashboards.",
          "Maintained long-term client relationships through reliable delivery and communication.",
        ],
        skills: ["Python", "JavaScript", "PostgreSQL"],
      },
    ],
  },
};
