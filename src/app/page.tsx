import HeaderSection from "@/components/HeaderSection"
import LastProjects from "@/components/LastProjects"
import StackSection from "@/components/StackSection"
import Timeline from "@/components/Timeline"
import TimelineToggle from "@/components/TimelineToggle"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { NextPage } from "next"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}

const getStack = (elements: TimeLineItemType[]) => {
  const allTechs = elements.flatMap((item) => item.technologies)
  // 2. Count appearances
  const techCount = allTechs.reduce<Record<string, number>>((acc, tech) => {
    acc[tech] = (acc[tech] || 0) + 1

    return acc
  }, {})
  const sortedTechs = Object.entries(techCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tech, count]) => ({ technology: tech, count }))
  const topTechs = sortedTechs.slice(0, 10)

  return topTechs
}
const Home: NextPage<Props> = ({ searchParams }) => {
  const { category, view } = searchParamsCache.parse(searchParams)
  const sortedElements = timelineElements.sort(
    (a: TimeLineItemType, b: TimeLineItemType) =>
      new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
  )
  const filteredElements = sortedElements.filter((element) => {
    if (!category || category === "all") {
      return true
    }

    return element.category === category
  })
  const highlightedList = sortedElements.slice(0, 2)
  const simpleView = view === "simple"
  const stack = getStack(filteredElements)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="h-[80vh]">
        <HeaderSection />
      </section>
      <section className="h-[80vh]">
        <StackSection stack={stack} />
      </section>
      <section className="h-[80vh] xl:w-[60%]">
        <TimelineToggle />
        <h2 className={`text-4xl`}>
          <span className={`strike ${!simpleView ? "strike-active" : ""}`}>
            My last experience
          </span>
          <span className="">{!simpleView && " My whole career"}</span>
        </h2>
        {simpleView && <LastProjects elements={highlightedList} />}
        {!simpleView && <Timeline elements={filteredElements} />}
      </section>
    </main>
  )
}

export default Home
