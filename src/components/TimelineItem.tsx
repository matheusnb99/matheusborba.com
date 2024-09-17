import StackIcon from "@/components/StackIcon"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import { LuBookOpen, LuBriefcase, LuCalendarDays } from "react-icons/lu"

type TimeLineItemProps = {
  element: TimeLineItemType
}

const formatDate = (date: Date | undefined) => {
  if (!date) {
    return ""
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
  }).format(date)
}
const categoryIcons = {
  work: <LuBriefcase className="w-6 h-6" />,
  school: <LuBookOpen className="w-6 h-6" />,
  project: <LuCalendarDays className="w-6 h-6" />,
}
const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({ element }) => (
  <article className="flex gap-4 pb-10 relative before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200">
    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow">
      {categoryIcons[element.category]}
    </div>
    <div className="flex-1">
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
