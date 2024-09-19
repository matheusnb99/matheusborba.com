import StackIcon from "@/components/StackIcon"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import TimelineIcon from "./TimelineIcon"
import { formatDate } from "@/lib/formatDate"

type TimeLineItemProps = {
  element: TimeLineItemType
}

const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({ element }) => (
  <article className="flex gap-4 pb-10 relative before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200">
    <TimelineIcon category={element.category} />
    <div className="flex-1 shadow-2xl rounded-r-lg py-5 px-10">
      <h3 className="text-lg font-semibold">{element.title}</h3>
      <p className="text-sm text-gray-500">{element.company}</p>
      <p className="text-sm text-gray-500">
        {formatDate(element.startDate)} - {formatDate(element.endDate)}
      </p>
      <p className="mt-2 font-semibold ">{element.description}</p>
      {element.tasks && (
        <ul className="list-disc list-inside mt-2">
          {element.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
      {element.url && (
        <a
          href={element.url}
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Learn more
        </a>
      )}
      {element.technologies.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {element.technologies.map((tech, index) => (
            <StackIcon key={index} item={tech} />
          ))}
        </div>
      )}
    </div>
  </article>
)

export default TimeLineItem
