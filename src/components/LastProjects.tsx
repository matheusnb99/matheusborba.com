import TimelineCard from "@/components/timeline/TimelineCard"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

interface LastProjectsProps {
  elements: TimeLineItemType[]
}

const LastProjects: FunctionComponent<LastProjectsProps> = ({ elements }) => (
  <ul className="flex flex-col xl:flex-row gap-4 my-5 p-2 items-stretch">
    {elements.map((element) => (
      <li
        key={element.id}
        className="flex-1 flex flex-col self-stretch min-h-0 px-4 lg:w-1/3"
      >
        <div className="flex-1 min-h-0 ">
          <TimelineCard element={element} />
        </div>
      </li>
    ))}
  </ul>
)

export default LastProjects
