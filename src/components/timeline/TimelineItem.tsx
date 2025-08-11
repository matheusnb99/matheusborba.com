import { MotionArticle } from "@/components/motion/MotionArticle"
import { MotionDiv } from "@/components/motion/MotionDiv"
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
}) => {
  const layoutId = `timeline-item-${element.title}-${element.company}`

  return (
    <MotionArticle
      layoutId={layoutId}
      layout
      className={`flex gap-4 pb-10 relative ${
        showIcon
          ? "before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200"
          : " h-full "
      }`}
      transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
    >
      {showIcon && <TimelineIcon category={element.category} />}
      <MotionDiv layout className="flex-1 h-full">
        <TimelineCard element={element} />
      </MotionDiv>
    </MotionArticle>
  )
}

export default TimeLineItem
