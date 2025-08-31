import { Category } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import { LuBookOpen, LuBriefcase, LuCalendarDays } from "react-icons/lu"

type TimelineIconProps = {
  category: Category
  direction?: "top" | "left" | "bottom" | "right" | "none"
}
const directions = {
  top: "after:left-1/2 after:-translate-x-1/2 after:bottom-full after:border-l-[8px] after:border-r-[8px] after:border-b-[12px]  after:border-l-transparent after:border-r-transparent after:border-t-gray-300",
  left: "after:top-1/2 after:-translate-y-1/2 after:right-full after:border-t-[8px] after:border-b-[8px] after:border-r-[12px] after:border-t-transparent after:border-b-transparent after:border-t-gray-300",
  right:
    "after:top-1/2 after:-translate-y-1/2 after:left-full after:border-t-[8px] after:border-b-[8px] after:border-l-[12px] after:border-t-transparent after:border-b-transparent after:border-t-gray-300",
  bottom:
    "after:left-1/2 after:-translate-x-1/2 after:top-full after:border-l-[8px] after:border-r-[8px] after:border-t-[12px] after:border-l-transparent after:border-r-transparent after:border-t-gray-300",
  none: "after:hidden",
}
const categoryIcons = {
  work: <LuBriefcase className="w-6 h-6" />,
  school: <LuBookOpen className="w-6 h-6" />,
  project: <LuCalendarDays className="w-6 h-6" />,
}
const TimelineIcon: FunctionComponent<TimelineIconProps> = ({
  category,
  direction = "none",
}) => (
  <div
    className={`   relative z-10 flex items-center justify-center w-9 h-9 rounded-full 
    bg-white border border-gray-300 shadow
    after:content-[''] after:absolute after:w-0 after:h-0 ${directions[direction]}`}
  >
    {categoryIcons[category]}
  </div>
)

export default TimelineIcon
