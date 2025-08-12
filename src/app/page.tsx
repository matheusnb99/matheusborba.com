import FerrisWheelSection from "@/components/sections/FerrisWheelSection"
import FooterSection from "@/components/sections/FooterSection"
import HeaderSection from "@/components/sections/HeaderSection"
import CarrerSection from "@/components/sections/ProjectsSection"
import TimelineSection from "@/components/sections/TimelineSection"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { getStack } from "@/lib/timelineHelpers"
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
  const lastSchool = sortedElements.find((e) => e.category === "school")
  const lastWork = sortedElements.find((e) => e.category === "work")
  const highlightedList = [lastSchool, lastWork].filter(Boolean)
  const simpleView = view === "simple"
  const stack = getStack(filteredElements)
  const projects = sortedElements.filter(
    (element) => element.category === "project",
  )

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-grow min-h-screen flex-col items-center justify-between  xl:pt-24 lg:mx-28 md:mx-18 mx-5 px-5">
        <section className="lg:min-h-[100vh] w-full">
          <HeaderSection />
        </section>
        <section className="min-h-[80vh] md:ml-0 ml-32">
          <FerrisWheelSection size={750} stack={stack} />
        </section>
        <section className="min-h-[80vh] mb-10 w-full xl:w-[80%]">
          <TimelineSection
            highlightedList={highlightedList as TimeLineItemType[]}
            filteredElements={filteredElements}
            view={view}
          />
        </section>
        <section className="min-h-[80vh] md:w-[80%]">
          <CarrerSection projects={projects} />
        </section>

        {simpleView && (
          <div className="w-screen flex justify-center mt-8">
            <FooterSection />
          </div>
        )}
        {!simpleView && (
          <div className="w-screen -ml-[calc(50vw-50%)] flex justify-center mt-8">
            <FooterSection />
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
