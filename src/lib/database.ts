import { TimeLineItemType } from "@/lib/types/Timeline"

export const timelineElements: TimeLineItemType[] = [
  {
    title: "Apprenticeship as a Fullstack Developer",
    startDate: new Date("oct 2021"),
    endDate: new Date("30 sept 2024"),
    description: "Internal procedures automation",
    tasks: [
      "Requirements gathering and analysis to understand the business needs\n\r",
      "Identify key possible missions \n\r",
      "Create, build and maintain 11 internal applications to automate processes and improve operational efficiency\n\r",
      "Organized and led presentation meetings \n\r",
      "Agile development methodology",
    ],
    company: "HORIBA France",
    category: "work",
    technologies: [
      "NextJs",
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "AgilePoint",
    ],
  },
  {
    title: "Masters's Degree in Computer Science",
    startDate: new Date("sept 2022"),
    endDate: new Date("sept 2024"),
    description:
      "Obtained my Master's degree in computer science, where I learned the basics of programming.",
    company: "Sup De Vinci",
    category: "school",
    technologies: ["JavaScript"],
  },
  {
    title: "Lead Developer",
    description:
      "Web application aimed at the professional retraining of military personnel",
    company: "Implic-Action",
    tasks: [
      "Manage a 7-man team, project planning",
      "Project architecture (structure, package selection, ESLint configuration, etc.)",
      "Break down complex epics into smaller, manageable tasks",
      "Full-stack development",
    ],
    startDate: new Date("aug 2024"),
    endDate: new Date("may 2024"),
    category: "project",
    technologies: [
      "NextJs",
      "Prisma",
      "Linear",
      "Github Actions",
      "Docker",
      "Tailwind",
      "Tanstack Query",
      "TypeScript",
    ],
  },
  {
    title: "Fullstack Developer",
    description: "Japanese products e-commerce website",
    company: "Momotaro",
    startDate: new Date("jul 2023"),
    endDate: new Date("dec 2023"),
    category: "project",
    technologies: ["NextJs", "Next Auth", "TypeScript", "Express", "Tailwind"],
  },
  {
    title: "Bachelor's Degree in Computer Science",
    startDate: new Date("sept 2021"),
    endDate: new Date("sept 2022"),
    description:
      "Obtained my Bachelor's degree in computer science, where I learned the basics of programming.",
    company: "Sup De Vinci",
    category: "school",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJs",
      "Spring Boot",
    ],
  },
  {
    title: "DUT Informatique (Two-year technical degree in computer science)",
    description:
      "First year of my DUT in computer science, where I learned the basics of programming.",
    company: "Paris Saclay University",
    startDate: new Date("sept 2018"),
    endDate: new Date("sept 2020"),
    category: "school",
    technologies: [],
  },
  {
    title: "High School Diploma",
    description:
      "Started learning React to build more dynamic web applications.",
    company: "Lycée Rosa Parks",
    endDate: new Date("sept 2018"),
    category: "school",
    technologies: [],
  },
]
