import ClickableDiv from "@/components/ClickableDiv"
import ProjectCard from "@/components/project/ProjectCard"
import HeaderSection from "@/components/sections/HeaderSection"
import Timeline from "@/components/timeline/Timeline"
import ViewButton from "@/components/ViewButton"
import { timelineElements } from "@/lib/database"
import { searchParamsCache } from "@/lib/searchParamsCache"
import { ProjectType, TimeLineItemType } from "@/lib/types/Timeline"
import { NextPage } from "next"

type Props = {
  searchParams: Record<string, string | string[] | undefined>
}
// eslint-disable-next-line camelcase
import implic_action_onb_1 from "@/../public/projects/implic_action_onb_1.png"
import LastProjectCard from "@/components/timeline/LastProjectCard"

const projects: ProjectType[] = [
  {
    title: "Implic-Action",
    stack: ["React", "NextJs", "Tailwind"],
    description: "This is a project",
    // eslint-disable-next-line camelcase
    image: implic_action_onb_1,
    github: "private",
    demo: "http://community.leboncitoyen.fr/fr",
  },
  {
    title: "Project",
    stack: ["React", "NextJs", "Tailwind"],
    description: "This is a project",
    // eslint-disable-next-line camelcase
    image: implic_action_onb_1,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Implic-Action",
    stack: ["React", "NextJs", "Tailwind"],
    description: "This is a project",
    // eslint-disable-next-line camelcase
    image: implic_action_onb_1,
    github: "private",
    demo: "http://community.leboncitoyen.fr/fr",
  },
  {
    title: "Project",
    stack: ["React", "NextJs", "Tailwind"],
    description: "This is a project",
    // eslint-disable-next-line camelcase
    image: implic_action_onb_1,
    github: "https://github.com",
    demo: "https://demo.com",
  },
]
// eslint-disable-next-line max-lines-per-function
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  xl:p-24 lg:mx-28 md:mx-18 mx-5 px-5">
      <section className="h-[80vh] w-full">
        <HeaderSection />
      </section>
      <section className="h-full w-full pb-[300px]">
        <div className="flex flex-row space-x-4 ">
          <ViewButton />
          <h2 className="text-4xl pb-5">
            <span className={!simpleView ? "line-through" : ""}>
              My last experience
            </span>
            <span>{!simpleView && " => My whole career"}</span>
          </h2>
        </div>
        {simpleView ? (
          <div>
            <div className="w-full flex flex-col items-center justify-around lg:flex-row ">
              <LastProjectCard element={highlightedList[0]} />
              <ViewButton order="order-last lg:order-none" />
              <LastProjectCard element={highlightedList[1]} />
            </div>
          </div>
        ) : (
          <>
            <Timeline elements={filteredElements} />
            <ViewButton />
          </>
        )}
      </section>
      <section>
        <h2 className="text-4xl pb-5">Some of my projects</h2>
        <div className="w-full  flex flex-col flex-wrap items-center justify-around md:flex-row ">
          {projects.map((project, index) => {
            const expanded = projectId === index.toString()

            return (
              <div className="my-2 mx-2 w-1/2 md:w-1/4" key={index}>
                <ClickableDiv id={index.toString()} expanded={expanded}>
                  <ProjectCard
                    project={project}
                    expanded={expanded}
                    id={index.toString()}
                  />
                </ClickableDiv>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Home
