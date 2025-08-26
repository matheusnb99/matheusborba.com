import { StaticImageData } from "next/image"

export type Category = "work" | "school" | "project"

export type StackOptions =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "NextJs"
  | "Next Auth"
  | "Better Auth"
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
  | "Stripe"
  | "Azure"
  | "Go"
  | "GORM"
  | "SQLite"
  | "JWT"
  | "Cobra"
  | "Viper"

export type TimeLineItemType = {
  id: number
  title: string
  description: string
  tasks?: string[]
  company: string
  startDate?: Date
  endDate: Date
  category: Category
  siteUrl?: string
  gitUrl?: string
  image?: string
  technologies: StackOptions[]
}

export type ProjectType = {
  title: string
  stack: StackOptions[]
  description: string
  image: StaticImageData
  github: string
  demo: string
}
