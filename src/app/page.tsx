import LastProjects from "@/components/LastProjects"
import FerrisWheelSection from "@/components/sections/FerrisWheelSection"
import HeaderSection from "@/components/sections/HeaderSection"
import Timeline from "@/components/timeline/Timeline"
import TimelineToggle from "@/components/TimelineToggle"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { getStack } from "@/lib/timelineHelpers"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { NextPage } from "next"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}
// eslint-disable-next-line camelcase

const Home: NextPage<Props> = ({ searchParams }) => {
  const { category, view, projectId } = searchParamsCache.parse(searchParams)
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
    <main className="flex min-h-screen flex-col items-center justify-between  xl:p-24 lg:mx-28 md:mx-18 mx-5 px-5">
      <section className="h-[80vh] w-full">
        <HeaderSection />
      </section>
      <section className="h-[80vh]">
        <FerrisWheelSection size={500} stack={stack} />
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
