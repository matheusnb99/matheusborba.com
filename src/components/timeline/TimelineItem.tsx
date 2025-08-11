import TimelineCard from "@/components/timeline/TimelineCard"
import TimelineIcon from "@/components/timeline/TimelineIcon"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimeLineItemProps = {
  element: TimeLineItemType
  showIcon?: boolean
}

const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({
  element,
  showIcon = true,
}) => (
  <article
    className={`flex gap-4 pb-10 relative ${
      showIcon
        ? "before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200"
        : " h-full "
    }`}
  >
    {showIcon && <TimelineIcon category={element.category} />}
    <div className="flex-1 h-full">
      <TimelineCard element={element} />
    </div>
  </article>
)

export default TimeLineItem
