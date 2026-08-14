export const weekwins = {
  heroImage: "/projects/project-three.svg",
  heroImageAlt: "WeekWins weekly goal and productivity platform",
  highlight:
    "WeekWins is a productivity and project-planning platform that helps users turn larger goals into actionable weekly plans — plan the week, execute the work, track progress, and review the wins.",
  overview:
    "WeekWins is a productivity and project-planning platform centered on weekly execution rather than endless task backlogs. Users define goals, organize work into projects, plan realistic weekly priorities, manage tasks with clear status and priority, and review meaningful progress at the end of each week. The core workflow connects goals → projects → weekly plans → tasks → execution → progress → weekly review.",
  problem:
    "Many productivity tools become overwhelming because users create large numbers of tasks without a clear connection to their actual goals. Big goals turn into many tasks, priorities become unclear, work keeps moving forward without finishing, and users lose their sense of progress. WeekWins addresses this by structuring work around what matters for the current week.",
  solution:
    "Built a structured workflow where goals provide context, projects organize related work, and weekly planning forces users to focus on a realistic set of priorities. Tasks belong to projects and weekly periods, with status transitions and priority levels that automatically feed project progress, weekly progress, and dashboard statistics — so users see meaningful progress instead of an endless to-do list.",
  features: [
    {
      title: "Goal management",
      description:
        "Define larger objectives — launch a SaaS, learn Django, build a portfolio — that provide context for weekly work.",
    },
    {
      title: "Project management",
      description:
        "Organize related work into projects under each goal, such as Backend, Frontend, Authentication, and Deployment.",
    },
    {
      title: "Weekly planning",
      description:
        "Plan work around a specific week with prioritized focus items instead of an unbounded backlog.",
    },
    {
      title: "Task management",
      description:
        "Create tasks with title, description, project, priority, status, due date, weekly assignment, and completion state.",
    },
    {
      title: "Priority management",
      description:
        "High, medium, and low priorities so must-do work stays visible during weekly planning.",
    },
    {
      title: "Weekly progress",
      description:
        "Overview of completed, in-progress, and remaining tasks with percentage progress for the current week.",
    },
    {
      title: "Project progress",
      description:
        "Track completion at the project level so daily execution connects to larger objectives.",
    },
    {
      title: "Weekly review",
      description:
        "End-of-week reflection on what was completed, what remains, key wins, and what to prioritize next.",
    },
    {
      title: "Dashboard",
      description:
        "Centralized view of this week's progress, today's tasks, active projects, and weekly wins.",
    },
  ],
  screenshots: [],
  video: null,
  challenges: [
    {
      title: "Connecting tasks with projects and weeks",
      description:
        "Tasks aren't isolated — they belong to a user, goal, project, and weekly period. Designing these relationships correctly was essential for meaningful progress statistics.",
    },
    {
      title: "Weekly planning logic",
      description:
        "The application must correctly associate tasks with weekly periods (e.g. Monday–Sunday) so planning and progress stay accurate across week boundaries.",
    },
    {
      title: "Progress calculation",
      description:
        "Project and weekly progress are derived from task completion — e.g. 7 of 10 completed tasks = 70% — rather than manually entered values.",
    },
    {
      title: "Task state management",
      description:
        "Todo → In Progress → Completed transitions must consistently update weekly progress, project progress, dashboard stats, and completion history.",
    },
    {
      title: "Productivity without overcomplication",
      description:
        "Balancing enough functionality to be useful with enough simplicity that users actually use it every week — a core product-design challenge.",
    },
  ],
  lessonsLearned: [
    "Weekly planning creates focus — constraining work to a week prevents the endless backlog problem common in generic task tools.",
    "Progress metrics should be computed from task state, not manually maintained, so dashboards stay trustworthy.",
    "Goal → project → week → task hierarchy is the foundation; get the data model right before building UI.",
    "Weekly review is as important as weekly planning — meaningful progress matters more than raw task counts.",
  ],
  role: [
    "Designed application architecture and database relationships between goals, projects, weeks, and tasks",
    "Developed REST APIs with Express.js",
    "Implemented goal and project management",
    "Implemented weekly planning and task management",
    "Implemented progress tracking for weeks and projects",
    "Developed dashboard functionality",
    "Implemented authentication",
    "Integrated React frontend with backend APIs",
    "Worked on responsive UI with Tailwind CSS",
    "Handled deployment and application infrastructure",
  ],
  tech: [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "Linux",
    "Git",
  ],
};
