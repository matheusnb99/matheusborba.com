import TimeLineItem from "@/components/TimelineItem"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

interface LastProjectsProps {
  elements: TimeLineItemType[]
}

const LastProjects: FunctionComponent<LastProjectsProps> = ({ elements }) => (
  <ul className="flex flex-col  xl:flex-row gap-4 my-5 p-2 items-stretch ">
    {elements.map((element) => (
      <li
        key={element.title}
        className="basis-1/2 h-auto col rounded-lg shadow-md border-gray-700 bg-slate-200 px-4 py-6 "
      >
        <TimeLineItem element={element} showIcon={false} />
      </li>
    ))}
  </ul>
)

export default LastProjects
