import { Category } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import { LuBookOpen, LuBriefcase, LuCalendarDays } from "react-icons/lu"

type TimelineIconProps = {
  category: Category
}
const categoryIcons = {
  work: <LuBriefcase className="w-6 h-6" />,
  school: <LuBookOpen className="w-6 h-6" />,
  project: <LuCalendarDays className="w-6 h-6" />,
}
const TimelineIcon: FunctionComponent<TimelineIconProps> = ({ category }) => (
  <div className="pt-5 flex justify-center">
    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow">
      {categoryIcons[category]}
    </div>
  </div>
)

export default TimelineIcon
