export type Category = "work" | "education" | "project"

export type TimeLineItem = {
  title: string
  description: string
  company: string
  startDate: string
  endDate: string
  category: Category
  url?: string
  technologies: string[]
}
