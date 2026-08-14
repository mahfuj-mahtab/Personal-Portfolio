export const champkoder = {
  heroImage: "/champkoder/1.png",
  heroImageAlt:
    "ChampKoder homepage — interview preparation platform with roadmaps, problems, and quizzes",
  highlight:
    "Built and maintained an interactive programming LMS serving 200+ daily users, combining conventional LMS functionality with online code execution and automated programming evaluation.",
  overview:
    "ChampKoder is an interview preparation platform at champkoder.com where developers master coding interviews through structured roadmaps, coding problems, quizzes, interview Q&A, CV building, and ATS resume checking. The platform combines traditional LMS functionality with Judge0-powered code execution so learners practice, submit solutions, and receive immediate feedback.",
  problem:
    "Traditional LMS platforms are mainly designed around videos, documents, courses, and quizzes. Programming education and interview prep require students to actually write and execute code, compete on leaderboards, and prepare tailored resumes — not just watch lessons.",
  solution:
    "Built an all-in-one interview prep platform with courses, roadmaps, problem sets with test-case evaluation, live quizzes, CV builder with PDF export, ATS resume checker, and a gamified leaderboard. Judge0 handles secure code execution while Redis and RabbitMQ keep submissions and caching fast under concurrent student load.",
  features: [
    {
      title: "Structured roadmaps",
      description:
        "Daily learning plans that guide developers through interview prep step by step.",
    },
    {
      title: "Coding problem sets",
      description:
        "Curated challenges with difficulty levels, rewards, and unlockable tutorials after submission.",
    },
    {
      title: "Quiz system",
      description:
        "Interview-style quizzes with automatic evaluation, scores, and progress tracking.",
    },
    {
      title: "Online code execution",
      description:
        "Judge0 integration lets users run programming solutions against test cases without local setup.",
    },
    {
      title: "CV builder",
      description:
        "Software engineer CV builder with multiple templates, live preview, and PDF download.",
    },
    {
      title: "ATS resume checker",
      description:
        "Upload a resume and job description to get ATS score, keyword match, and AI-powered tips.",
    },
    {
      title: "Leaderboard",
      description:
        "Gamified ranking system with diamonds and coins to motivate consistent practice.",
    },
    {
      title: "Interview Q&A",
      description:
        "Subject-wise interview preparation content alongside courses and practice problems.",
    },
  ],
  screenshots: [
    {
      label: "Homepage",
      image: "/champkoder/1.png",
      imageAlt: "ChampKoder homepage with roadmaps, problems, quizzes, and interview prep",
    },
    {
      label: "Problem Sets",
      image: "/champkoder/2.png",
      imageAlt: "ChampKoder problem sets practice arena with coding challenges",
    },
    {
      label: "CV Builder",
      image: "/champkoder/3.png",
      imageAlt: "ChampKoder software engineer CV builder with live preview",
    },
    {
      label: "ATS Checker",
      image: "/champkoder/4.png",
      imageAlt: "ChampKoder ATS resume checker with keyword matching",
    },
    {
      label: "Leaderboard",
      image: "/champkoder/5.png",
      imageAlt: "ChampKoder leaderboard with diamond rankings",
    },
    {
      label: "Code Editor",
      image: "/champkoder/6.png",
      imageAlt: "ChampKoder coding challenge editor with test case results",
    },
    {
      label: "Sign In",
      image: "/champkoder/7.png",
      imageAlt: "ChampKoder sign in and authentication page",
    },
    {
      label: "My Profile",
      image: "/champkoder/8.png",
      imageAlt: "ChampKoder user profile with streaks, coins, and learning progress",
    },
  ],
  video: null,
  challenges: [
    {
      title: "Secure code execution",
      description:
        "Running arbitrary user-submitted code is a major security concern. The execution environment must be isolated from the main application via Judge0.",
    },
    {
      title: "Handling concurrent submissions",
      description:
        "When many students submit code simultaneously, the application must not become blocked. Asynchronous processing and queues keep the system responsive.",
    },
    {
      title: "Performance",
      description:
        "The platform handles course browsing, quiz attempts, code submissions, and result retrieval without slowing down the user experience.",
    },
    {
      title: "Learning progress tracking",
      description:
        "Tracking where each student is in their journey requires careful modeling of courses, lessons, quizzes, and submissions.",
    },
  ],
  lessonsLearned: [
    "Isolated code execution (Judge0) is non-negotiable — never run student code in your application process.",
    "Queue-based submission handling scales better than synchronous execution when class sizes grow.",
    "Combining LMS, competitive programming, and career tools in one platform requires clear navigation and shared progress models.",
    "Caching course content and quiz metadata with Redis materially improves browse performance at 200+ daily users.",
  ],
  role: [
    "Designed backend architecture and REST APIs",
    "Implemented LMS functionality and course progression",
    "Built quiz system with automatic evaluation",
    "Implemented programming challenge and submission system",
    "Integrated Judge0 for secure code execution",
    "Built CV builder and ATS resume checker features",
    "Implemented Redis caching for performance",
    "Implemented RabbitMQ-based asynchronous processing",
    "Designed database models for courses, quizzes, and submissions",
    "Optimized backend performance and deployment infrastructure",
  ],
  tech: [
    "Python",
    "Django",
    "DRF",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Judge0",
    "React",
    "Linux",
    "Docker",
    "Git",
  ],
};
