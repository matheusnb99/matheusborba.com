import HeaderSection from "@/components/HeaderSection"
import LastProjects from "@/components/LastProjects"
import Timeline from "@/components/Timeline"
import ViewButton from "@/components/ViewButton"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { NextPage } from "next"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="h-[80vh]">
        <HeaderSection />
      </section>
      <section className="h-[80vh]">
        <h2 className={`text-4xl `}>
          <span className={!simpleView ? "line-through" : ""}>
            My last experience
          </span>
          <span>{!simpleView && "My whole career"}</span>
        </h2>
        {simpleView && <LastProjects elements={highlightedList} />}
        {!simpleView && <Timeline elements={filteredElements} />}
        <ViewButton />
      </section>
    </main>
  )
}

export default Home
