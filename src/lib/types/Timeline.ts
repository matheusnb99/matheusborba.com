export type Category = "work" | "school" | "project"

export type StackOptions =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NextJs"
  | "Next Auth"
  | "php"
  | "Docker"
  | "Django"
  | "MySql"
  | "MongoDB"
  | "Redis"
  | "Tailwind"
  | "Tanstack Query"
  | "HTML"
  | "CSS"
  | "Java"
  | "Spring Boot"
  | "Power Apps"
  | "Power Automate"
  | "SharePoint"
  | "AgilePoint"
  | "Prisma"
  | "Linear"
  | "Notion"
  | "Github"
  | "Github Actions"
  | "Express"

export type TimeLineItemType = {
  title: string
  description: string
  tasks?: string[]
  company: string
  startDate?: Date
  endDate: Date
  category: Category
  url?: string
  technologies: StackOptions[]
}
