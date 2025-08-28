import { MotionArticle } from "@/components/motion/MotionArticle"
import { MotionDiv } from "@/components/motion/MotionDiv"
import TimelineCard from "@/components/timeline/TimelineCard"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimeLineItemProps = {
  element: TimeLineItemType
  iconPosition?: "left" | "right"
}

const TimeLineItem: FunctionComponent<TimeLineItemProps> = ({
  element,
  iconPosition = "left",
}) => (
  <MotionArticle
    layout
    className={`relative flex w-full justify-${iconPosition === "left" ? "start" : "end"} mb-6`}
    transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
  >
    <MotionDiv
      layout
      className={`w-full ${iconPosition === "left" ? "pr-8" : ""}`}
    >
      <TimelineCard element={element} />
    </MotionDiv>
  </MotionArticle>
)

export default TimeLineItem
