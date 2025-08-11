import { StackOptions, TimeLineItemType } from "@/lib/types/Timeline"

const getStack = (elements: TimeLineItemType[]) => {
  const allTechs = elements.flatMap((item) => item.technologies)
  // 2. Count appearances
  const techCount = allTechs.reduce<Partial<Record<StackOptions, number>>>(
    (acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1

      return acc
    },
    {},
  )
  const sortedTechs = Object.entries(techCount)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .map(([tech, count]) => ({
      technology: tech as StackOptions,
      count: Number(count),
    }))
  const topTechs: { technology: StackOptions; count: number }[] =
    sortedTechs.slice(0, 10)

  return topTechs
}

export { getStack }
