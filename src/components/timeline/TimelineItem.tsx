import SpringAnimation from "@/components/timeline/SpringAnimation"
import TimelineIcon from "@/components/timeline/TimelineIcon"
import { Category } from "@/lib/types/Timeline"
import { FunctionComponent, ReactNode } from "react"

type TimelineItemProps = {
  direction: "right" | "left"
  category: Category
  children: ReactNode
}

const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  direction,
  category,
  children,
}) => (
  <div className="my-11 w-full">
    <div className="absolute -left-4 md:left-1/2 md:-translate-x-[17px] mt-5">
      <TimelineIcon category={category} direction={direction} />
    </div>
    <div className={direction === "right" ? "justify-end" : "justify-start"}>
      <SpringAnimation>{children}</SpringAnimation>
    </div>
  </div>
)

export default TimelineItem
