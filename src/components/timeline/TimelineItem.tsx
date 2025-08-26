import { MotionArticle } from "@/components/motion/MotionArticle"
import { MotionDiv } from "@/components/motion/MotionDiv"
import TimelineCard from "@/components/timeline/TimelineCard"
import TimelineIcon from "@/components/timeline/TimelineIcon"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimeLineItemProps = {
  element: TimeLineItemType
  showIcon?: boolean
  iconPosition?: "left" | "right"
}

const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({
  element,
  showIcon = true,
  iconPosition = "left",
}) => (
  <MotionArticle
    layout
    className={`flex gap-4 pb-10 relative ${
      showIcon
        ? `before:absolute before:${iconPosition}-[17px] before:h-full before:w-0.5 before:bg-gray-200`
        : " h-full "
    } ${iconPosition === "right" ? "flex-row-reverse" : ""}`}
    transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
  >
    {showIcon && <TimelineIcon category={element.category} />}
    <MotionDiv layout className="flex-1 h-full">
      <TimelineCard element={element} />
    </MotionDiv>
  </MotionArticle>
)

export default TimeLineItem
