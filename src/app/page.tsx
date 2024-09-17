import Timeline from "@/components/Timeline"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { NextPage } from "next"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}

const Home: NextPage<Props> = ({ searchParams }) => {
  const { category } = searchParamsCache.parse(searchParams)
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Timeline elements={filteredElements} />
    </main>
  )
}

export default Home
