export const hrmsMobile = {
  heroImage: "/projects/project-two.svg",
  heroImageAlt: "Screenshot of HRMS Mobile App",
  overview:
    "React Native mobile app for HR management — attendance tracking, leave requests, and payroll visibility. Built with offline-friendly sync and role-based access for employees and managers.",
  problem:
    "HR teams at mid-size companies relied on spreadsheets and paper forms for attendance and leave management, causing delays, errors, and no real-time visibility for employees.",
  solution:
    "Built a cross-platform mobile app with offline-first architecture. Employees clock in/out, request leave, and view payroll summaries. Managers approve requests and view team attendance from the same app.",
  features: [
    {
      title: "Attendance tracking",
      description: "Clock in/out with GPS verification and daily attendance history.",
    },
    {
      title: "Leave management",
      description: "Submit leave requests with type, dates, and approval workflow.",
    },
    {
      title: "Payroll visibility",
      description: "Employees view salary breakdowns, deductions, and payment history.",
    },
    {
      title: "Offline sync",
      description: "Actions queue locally and sync when connectivity returns.",
    },
    {
      title: "Role-based access",
      description: "Different views and permissions for employees, managers, and HR admins.",
    },
  ],
  screenshots: [
    {
      label: "Home",
      image: "/projects/project-two.svg",
      imageAlt: "HRMS Mobile App home screen",
    },
    {
      label: "Attendance",
      image: "/projects/project-two.svg",
      imageAlt: "HRMS Mobile App attendance screen",
    },
    {
      label: "Leave",
      image: "/projects/project-two.svg",
      imageAlt: "HRMS Mobile App leave request screen",
    },
  ],
  video: null,
  challenges: [
    {
      title: "Offline sync conflicts",
      description:
        "Multiple offline actions syncing simultaneously can conflict. Implemented a queue-based sync with server-side conflict resolution.",
    },
    {
      title: "GPS accuracy in buildings",
      description:
        "Indoor GPS is unreliable for attendance verification. Added a grace radius and manual override for managers.",
    },
  ],
  lessonsLearned: [
    "Offline-first mobile apps need a clear sync strategy from day one — retrofitting is painful.",
    "Role-based UI should be driven by API permissions, not hardcoded in the client.",
  ],
  tech: ["React Native", "Redux", "Django", "DRF", "PostgreSQL", "AsyncStorage"],
};
