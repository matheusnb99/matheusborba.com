import LastProjectItem from "@/components/LastProjectItem"
import HeaderSection from "@/components/sections/HeaderSection"
import Timeline from "@/components/timeline/Timeline"
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
    <main className="flex min-h-screen flex-col items-center justify-between  xl:p-24 lg:mx-28 md:mx-18 sm:mx-5 sm:px-5">
      <section className="h-[80vh] w-full">
        <HeaderSection />
      </section>
      <section className="h-[80vh] w-full">
        <div className="flex flex-row space-x-4">
          <ViewButton />
          <h2 className={`text-4xl`}>
            <span className={!simpleView ? "line-through" : ""}>
              My last experience
            </span>
            <span>{!simpleView && " => My whole career"}</span>
          </h2>
        </div>
        {simpleView ? (
          <div>
            <h2 className="text-xl px-10 py-5">Last Projects</h2>
            <div className="w-full flex flex-col items-center justify-around lg:flex-row lg:space-x-4 lg:space-y-0 md:space-y-4  sm:space-y-4">
              <LastProjectItem element={highlightedList[0]} />
              <ViewButton />
              <LastProjectItem element={highlightedList[1]} />
            </div>
          </div>
        ) : (
          <>
            <Timeline elements={filteredElements} />
            <ViewButton />
          </>
        )}
      </section>
    </main>
  )
}

export default Home
