export const siteConfig = {
  brand: "Mohot",
  name: "Mahfuj Mahtab Mohot",
  role: "SaaS MVP Developer",
  tagline:
    "I help startup founders turn SaaS ideas into production-ready MVPs using Python, Django/FastAPI, Node.js/Express, Next.js, and AI integrations.",
  about: [
    {
      question: "Who am I?",
      answer:
        "I'm a full-stack engineer from Dhaka, Bangladesh, with a BSc in Computer Science & Engineering from the University of Asia Pacific. I ship production systems across SaaS, HRMS, and EdTech — from tenant-isolated backends to user-facing dashboards.",
    },
    {
      question: "What do I specialize in?",
      answer:
        "SaaS MVP delivery end-to-end — multi-tenant architecture, Django/FastAPI and Node.js/Express APIs, dynamic RBAC, e-commerce SaaS, LMS platforms, and RAG-powered AI integrations.",
    },
    {
      question: "What have I built?",
      answer:
        "ChampKoder — an interview prep LMS with 200+ daily users, Judge0 code judging, and gamification. StoreSetup — a multi-tenant e-commerce SaaS with custom domains and POS. WeekWins — a weekly goal and productivity platform. Smart Hiring — recruitment SaaS with dynamic RBAC.",
    },
    {
      question: "Why hire me?",
      answer:
        "You get someone who owns features end-to-end: API design, database modeling, frontend integration, Docker deployment, CI/CD on AWS, and clear communication on remote timelines.",
    },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahfujmahtabmohot/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/mahfuj-mahtab",
      icon: "github",
    },
    {
      label: "X",
      href: "https://x.com/MahfujMohot",
      icon: "twitter",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/HiMohot/",
      icon: "facebook",
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/users/iammohot/",
      icon: "fiverr",
    },
    {
      label: "Email",
      href: "mailto:mohotmahfuj@gmail.com",
      icon: "mail",
    },
  ],
  cv: {
    label: "Download CV",
    href: "/Mahfuj%20Mahtab%20Mohot.pdf",
    download: "Mahfuj Mahtab Mohot - CV.pdf",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
  ],
  footer: {
    tagline:
      "SaaS MVP Developer · Django, FastAPI & Node.js · Next.js · AI Integration",
  },
  services: {
    title: "Services",
    description:
      "I help early-stage founders ship production-ready SaaS MVPs — not prototypes. You bring the idea and business knowledge; I handle the technical execution.",
    items: [
      {
        id: "saas-mvp",
        name: "SaaS MVP Development",
        badge: "Primary",
        icon: "rocket",
        pitch:
          "I take your product idea from concept to production-ready SaaS MVP.",
        target: "Early-stage startup/SaaS founders (1–10 people, idea → MVP stage)",
        includes: [
          "Authentication & user management",
          "Multi-tenancy & RBAC",
          "Admin dashboards",
          "REST APIs & database architecture",
          "Payments, email/SMS & file uploads",
          "Background jobs & AI integrations",
          "Deployment",
        ],
        stack: [
          "Python",
          "Django",
          "FastAPI",
          "Node.js",
          "Express.js",
          "Next.js",
          "PostgreSQL",
          "Docker",
          "AWS",
        ],
        priceRange: "$500 – $3,000+ depending on scope",
        cta: {
          label: "Discuss your MVP",
          href: "mailto:mohotmahfuj@gmail.com?subject=SaaS%20MVP%20Development%20Inquiry",
        },
      },
      {
        id: "ai-integration",
        name: "AI Integration",
        badge: "Specialization",
        icon: "brain",
        pitch: "Add AI capabilities to your existing SaaS or web application.",
        target: "Existing SaaS founders, agencies, and startup teams",
        includes: [
          "AI chatbots & assistants",
          "Document processing",
          "CV/resume analysis",
          "RAG systems",
          "OpenAI/Claude/Gemini integrations",
          "AI-powered search",
          "Workflow automation",
        ],
        stack: ["Python", "Node.js", "LangChain/RAG", "REST APIs"],
        priceRange: "Smaller scoped projects — quote on request",
        cta: {
          label: "Discuss AI integration",
          href: "mailto:mohotmahfuj@gmail.com?subject=AI%20Integration%20Inquiry",
        },
      },
      {
        id: "backend-api",
        name: "SaaS Backend & API Development",
        badge: null,
        icon: "server",
        pitch:
          "Scalable Django, FastAPI, or Express backends and REST APIs when you don't need a full MVP.",
        target: "Startups, agencies, and frontend teams needing a backend",
        includes: [
          "API design",
          "Database modeling",
          "Authentication",
          "Background jobs",
          "Third-party integrations",
          "Deployment",
        ],
        stack: [
          "Django/DRF",
          "FastAPI",
          "Node.js/Express",
          "PostgreSQL",
          "Redis",
          "Celery",
        ],
        priceRange: null,
        cta: {
          label: "Discuss backend work",
          href: "mailto:mohotmahfuj@gmail.com?subject=Backend%2FAPI%20Development%20Inquiry",
        },
      },
    ],
  },
  heroVideo: null,
  techStack: {
    title: "Skills & Tech Stack",
    description:
      "Languages, frameworks, databases, DevOps, and AI tools I use in production.",
    categories: [
      {
        name: "Languages",
        items: ["Python", "JavaScript", "SQL"],
      },
      {
        name: "Frontend",
        items: ["HTML5", "CSS3", "Tailwind CSS", "React", "Redux Toolkit", "Next.js"],
      },
      {
        name: "Backend",
        items: ["Django", "DRF", "Node.js", "Express.js", "Frappe", "ERPNext"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        name: "DevOps & Tools",
        items: [
          "Git",
          "Linux",
          "Docker",
          "Redis",
          "Celery",
          "CI/CD",
          "AWS",
          "VPS",
        ],
      },
      {
        name: "AI",
        items: ["RAG", "MCP", "Agentic AI"],
      },
    ],
    rows: [
      {
        direction: "ltr",
        items: [
          { name: "Python", icon: "python" },
          { name: "Django", icon: "django" },
          { name: "DRF", icon: "drf" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Redis", icon: "redis" },
        ],
      },
      {
        direction: "rtl",
        items: [
          { name: "Docker", icon: "docker" },
          { name: "Celery", icon: "celery" },
          { name: "AWS", icon: "aws" },
          { name: "Linux", icon: "linux" },
          { name: "CI/CD", icon: "githubactions" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Frappe", icon: "frappe" },
          { name: "ERPNext", icon: "erpnext" },
          { name: "RAG", icon: "langchain" },
          { name: "Judge0", icon: "judge0" },
          { name: "RabbitMQ", icon: "rabbitmq" },
        ],
      },
    ],
  },
  projects: {
    title: "Products & Projects",
    description:
      "SaaS products and portfolio projects — multi-tenant platforms, productivity tools, LMS, and recruitment systems.",
    items: [
      {
        id: "champkoder",
        kind: "product",
        period: "Jan 2024 – Dec 2024",
        name: "ChampKoder",
        description:
          "Interview prep LMS with 200+ daily users — roadmaps, coding problems, Judge0 execution, quizzes, CV builder, and ATS checker.",
        image: "/champkoder/1.png",
        imageAlt: "ChampKoder interview preparation platform homepage",
        live: { label: "ChampKoder", href: "https://champkoder.com" },
        github: [
          {
            label: "GitHub",
            href: "https://github.com/mahfuj-mahtab",
          },
        ],
      },
      {
        id: "storesetup",
        kind: "product",
        period: "Jan 2025 – Present",
        name: "StoreSetup",
        description:
          "Multi-tenant e-commerce SaaS with subdomain and custom domain isolation, merchant onboarding, RBAC, RAG merchant assistant, AI product image studio, and finance tracking.",
        image: "/ecom-saas/1.png",
        imageAlt: "StoreSetup storefront homepage",
        live: { label: "Live Demo", href: "https://example.com" },
        github: [
          {
            label: "GitHub",
            href: "https://github.com/mahfuj-mahtab",
          },
        ],
      },
      {
        id: "weekwins",
        kind: "project",
        period: "Mar 2026 – Present",
        name: "WeekWins",
        description:
          "Weekly goal and productivity platform — goals, projects, weekly planning, task management, progress tracking, and weekly reviews built on the MERN stack.",
        image: "/projects/project-three.svg",
        imageAlt: "WeekWins weekly goal and productivity platform",
        live: null,
        github: [],
      },
      {
        id: "smart-hiring",
        kind: "project",
        name: "Smart Hiring",
        description:
          "Multi-tenant recruitment SaaS with dynamic RBAC, job publishing to career sites, candidate applications, CV uploads, and hiring pipeline.",
        image: "/projects/project-two.svg",
        imageAlt: "Smart Hiring recruitment platform",
        live: null,
        github: [
          {
            label: "Backend",
            href: "https://github.com/mahfuj-mahtab/Smart-Hiring-Backend",
          },
          {
            label: "Frontend",
            href: "https://github.com/mahfuj-mahtab/Smart-Hiring-Frontend",
          },
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    description: "Professional work and product builds — roles, impact, and tech stacks.",
    work: {
      title: "Professional Work",
      items: [
        {
          id: "jatratech",
          title: "Junior Full Stack Engineer",
          company: "JatraTech",
          employmentType: "Full-time",
          location: "Dhaka, Bangladesh",
          start: "Mar 2026",
          end: "Present",
          summary:
            "Building project management, HR modules, and multi-tenant infrastructure on AWS.",
          highlights: [
            "Developed a complete Project, Task, and Recurring Task Management System.",
            "Built and maintained HR modules including Leave Management and Work Session tracking.",
            "Integrated GitHub to automatically associate commits with related tasks.",
            "Implemented multi-tenant architecture with custom domain support using AWS Certificate Manager (ACM).",
            "Managed application deployment on AWS including Docker containerization and CI/CD pipeline maintenance.",
            "Collaborated on backend API development, database design, and feature implementation using Django and DRF.",
          ],
          skills: [
            "Python",
            "Django",
            "DRF",
            "PostgreSQL",
            "Docker",
            "Celery",
            "CI/CD",
            "AWS",
          ],
        },
        {
          id: "fusion-infotech",
          title: "Junior Full Stack Engineer",
          company: "Fusion InfoTech Limited",
          employmentType: "Full-time",
          location: "Dhaka, Bangladesh",
          start: "May 2025",
          end: "Feb 2026",
          summary:
            "Developed and customized HRMS modules on Frappe/ERPNext for leave, attendance, and payroll.",
          highlights: [
            "Developed and customized HRMS modules including Leave, Attendance, Payroll, Attendance Request, Change in Pay, Compensatory Leave, Leave Encashment, and Earned Leave management with reports.",
            "Developed APIs for Compensatory Leave applications and created Short Leave functionality.",
            "Implemented schedulers for handling future-dated salary structure assignments and pay changes.",
          ],
          skills: ["Python", "JavaScript", "Node.js", "Frappe", "ERPNext"],
        },
        {
          id: "somikoron-it",
          title: "Intern",
          company: "Somikoron IT",
          employmentType: "Internship",
          location: "Dhaka, Bangladesh",
          start: "Jan 2025",
          end: "Mar 2025",
          summary:
            "Contributed to the Robobot project using Django and Django REST Framework.",
          highlights: [
            "Implemented and maintained basic CRUD functionality for backend modules.",
            "Assisted with API development, bug fixing, and feature enhancements.",
            "Performed QA testing to identify, reproduce, and verify bug fixes.",
            "Collaborated with the development team to ensure application stability.",
          ],
          skills: ["Python", "Django", "DRF"],
        },
        {
          id: "dreamers-academy",
          title: "Coding Instructor",
          company: "Dreamers Academy",
          employmentType: "Remote",
          location: "Remote",
          start: "Dec 2023",
          end: "Feb 2025",
          summary:
            "Taught coding fundamentals to students remotely — Python, JavaScript, and web design.",
          highlights: [
            "Delivered live coding lessons on Python programming for beginners and intermediate learners.",
            "Taught JavaScript fundamentals including variables, functions, DOM manipulation, and basic logic.",
            "Guided students through web design concepts — HTML, CSS, layout, and responsive pages.",
            "Prepared lesson materials, coding exercises, and hands-on practice for each session.",
            "Supported students with debugging, code reviews, and project feedback.",
          ],
          skills: ["Python", "JavaScript", "HTML", "CSS", "Web Design"],
        },
      ],
    },
    products: {
      title: "Product & SaaS Experience",
      items: [
        {
          id: "champkoder-exp",
          title: "Founder / Full-Stack Developer",
          company: "ChampKoder",
          employmentType: "Product",
          start: "Jan 2024",
          end: "Dec 2024",
          summary:
            "Built a scalable LMS platform with 200+ daily active users focused on interactive learning.",
          highlights: [
            "Developed quizzes (scheduled/on-demand) with timers, results, and feedback.",
            "Built video-course system with articles, quizzes, and assignments.",
            "Added coding problem judge using Judge0 for instant feedback.",
            "Implemented Google OAuth login and gamification with leaderboards.",
          ],
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "Django",
            "DRF",
            "Celery",
          ],
        },
        {
          id: "storesetup-exp",
          title: "Founder / Full-Stack Developer",
          company: "StoreSetup",
          employmentType: "Product",
          start: "Jan 2025",
          end: "Present",
          summary:
            "Developed a multi-tenant eCommerce SaaS platform with subdomain-based tenant isolation and custom domains.",
          highlights: [
            "Implemented merchant onboarding, subscription management, and RBAC for employees.",
            "Built product catalog, inventory management, order processing, and customizable storefronts.",
            "Designed RESTful APIs for frontend-backend communication and analytics dashboards.",
            "Implemented RAG system for merchants and AI studio to enhance product images.",
            "Built finance module to track income, expense, profit, and loss.",
          ],
          skills: ["Python", "Django", "DRF", "JavaScript", "Next.js"],
        },
      ],
    },
  },
  education: {
    title: "Education",
    description: "Academic background in computer science and engineering.",
    items: [
      {
        id: "uap-bsc",
        degree: "Bachelor of Computer Science & Engineering",
        institution: "University of Asia Pacific",
        detail: null,
      },
    ],
  },
  achievements: {
    title: "Achievements",
    description: "Awards and competition results.",
    items: [
      "VC Special Award",
      "Dean Award",
      "Champion — Project Showcase",
      "3rd Runners Up — Competitive Programming",
    ],
  },
};
