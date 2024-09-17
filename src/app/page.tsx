import Timeline from "@/components/Timeline"
import { timelineElements } from "@/lib/database"
import { abuget } from "@/lib/font/font"
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
      <header className="flex intro">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-10 md:text-5xl lg:text-4xl xl:text-3xl">
            <span className="whitespace-nowrap">Hello, my name is</span>
            <span
              className={`text-7xl font-normal tracking-wide whitespace-nowrap	block ${abuget.className}`}
            >
              Matheus Nunes Borba
            </span>
            and I'm a Computer Science student
            <a href="https://www.supdevinci.fr">@ Sup de Vinci</a>
          </h1>
        </div>
      </header>
      <Timeline elements={filteredElements} />
    </main>
  )
}

export default Home
