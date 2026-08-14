export const smartHiring = {
  heroImage: "/projects/project-two.svg",
  heroImageAlt: "Smart Hiring multi-tenant recruitment SaaS platform",
  highlight:
    "Smart Hiring is a multi-tenant recruitment SaaS platform that enables companies to manage their hiring process from job creation to candidate selection. Recruiters publish vacancies to company career pages while candidates apply online with CV uploads, backed by a dynamic RBAC system with module- and action-level permissions.",
  overview:
    "Smart Hiring is a multi-tenant recruitment SaaS platform that allows companies to manage their complete hiring process from a centralized system. Each company gets its own recruitment environment where recruiters create job vacancies, publish them to the company's career website, receive candidate applications, collect CVs, and manage candidates through the hiring pipeline. The platform includes dynamic Role-Based Access Control so organizations define what different roles can access and perform across modules — not hardcoded admin/recruiter rules.",
  problem:
    "Companies need to run end-to-end recruitment — job posting, public career pages, candidate applications, CV collection, and pipeline tracking — but building this as separate tools fragments the workflow. Recruiters need one system where internal job management connects to the public candidate experience, with strict tenant isolation so Company A never sees Company B's candidates, and flexible permissions so each organization configures its own roles.",
  solution:
    "Built a multi-tenant SaaS where recruiters create and publish jobs that appear on each company's public career website. Candidates apply through job pages, upload CVs, and submit applications without dashboard access. Recruiters review applications in a private dashboard and move candidates through configurable pipeline stages — Applied, Screening, Shortlisted, Interview, Selected, Hired, or Rejected. Authorization uses Role → Module → Action permissions evaluated dynamically per tenant, so Recruiter and Hiring Manager roles can differ by company.",
  features: [
    {
      title: "Multi-tenant architecture",
      description:
        "Multiple companies share one platform with isolated recruiters, jobs, candidates, and applications per tenant.",
    },
    {
      title: "Dynamic RBAC",
      description:
        "Configurable roles with module-level and action-level permissions (View, Create, Update, Delete, Publish, Approve, Export) — not hardcoded role rules.",
    },
    {
      title: "Job management",
      description:
        "Create and manage vacancies with title, description, requirements, skills, experience, location, salary, department, deadlines, and publish/close workflow.",
    },
    {
      title: "Company career website",
      description:
        "Published jobs appear on each company's public careers page — connecting the recruiter dashboard to the candidate-facing site.",
    },
    {
      title: "Candidate applications",
      description:
        "Candidates view jobs, read descriptions, apply with personal information, and upload CVs through public job pages.",
    },
    {
      title: "Candidate management",
      description:
        "Centralized profiles with CVs, applied jobs, application dates, status, recruiter notes, interviews, and application history.",
    },
    {
      title: "Recruitment pipeline",
      description:
        "Move candidates through Applied → Screening → Shortlisted → Interview → Selected → Hired, with full status history.",
    },
    {
      title: "Recruiter dashboard",
      description:
        "Overview of jobs (total, active, draft, closed), candidates (new, shortlisted, interviewing, selected, rejected), and recent applications.",
    },
  ],
  screenshots: [],
  video: null,
  challenges: [
    {
      title: "Multi-tenancy",
      description:
        "Every request must resolve tenant, user, role, and permissions before any action. APIs enforce strict data isolation so recruiters from Company A never access Company B's data.",
    },
    {
      title: "Dynamic RBAC",
      description:
        "Instead of hardcoding permissions on endpoints, the system dynamically checks whether a user's role allows a specific action on a module within their tenant.",
    },
    {
      title: "Public and private systems",
      description:
        "The public career website (job listings, applications, CV upload) and private recruiter dashboard (jobs, candidates, users, roles) must stay reliably connected across two surfaces.",
    },
    {
      title: "CV and file management",
      description:
        "Candidate CV uploads require file validation, secure storage, download permissions, and correct candidate-to-file relationships.",
    },
    {
      title: "Recruitment state management",
      description:
        "Candidate status transitions (Applied → Shortlisted → Interview → Selected) must maintain application history so recruiters see the full progression.",
    },
  ],
  lessonsLearned: [
    "Dynamic RBAC at the permission-check layer scales better than sprinkling role checks across views — one evaluation path for Role → Module → Action.",
    "Connecting public career pages to internal job publishing is the core product loop; both sides must share the same job and application models.",
    "Tenant context must be established before authorization — you cannot check permissions without knowing which company the user belongs to.",
    "Application history as an audit trail is essential when candidates move through multiple pipeline stages over weeks.",
  ],
  role: [
    "Designed multi-tenant architecture with company/tenant isolation",
    "Developed recruitment APIs using Django REST Framework",
    "Implemented dynamic RBAC with module-level and action-level permissions",
    "Built job management and publish-to-career-site workflow",
    "Built candidate management and application workflow",
    "Implemented CV upload and secure file management",
    "Connected recruiter job postings with public company career pages",
    "Developed recruitment pipeline functionality with status history",
    "Implemented authentication and authorization",
    "Designed database models and relationships",
    "Worked on API integration with the Next.js frontend",
  ],
  tech: [
    "Python",
    "Django",
    "DRF",
    "PostgreSQL",
    "Next.js",
    "React",
    "Redis",
    "Celery",
    "Docker",
    "Linux",
  ],
};
