import type { TimeLineItemType } from "@/lib/types/Timeline"
import { BookOpen, Briefcase, CalendarDays } from "lucide-react"
import { FunctionComponent } from "react"

type TimeLineItemProps = {
  element: TimeLineItemType
}

const icons = {
  work: <Briefcase className="w-6 h-6" />,
  education: <BookOpen className="w-6 h-6" />,
  project: <CalendarDays className="w-6 h-6" />,
}
const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({ element }) => (
  <article className="flex gap-4 pb-10 relative before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200">
    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow">
      {icons[element.category]}
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{element.title}</h3>
      <p className="text-sm text-gray-500">{element.company}</p>
      <p className="text-sm text-gray-500">
        {element.startDate} - {element.endDate}
      </p>
      <p className="mt-2">{element.description}</p>
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
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </article>
)

export default TimeLineItem
