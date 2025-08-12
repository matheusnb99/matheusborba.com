import CategoryDropDown from "@/components/CategoryDropDown"
import TimeLineItem from "@/components/timeline/TimelineItem"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimelineProps = {
  elements: TimeLineItemType[]
}

const Timeline: FunctionComponent<TimelineProps> = ({ elements }) => (
  <div className="flex w-full">
    <CategoryDropDown />
    <section className="max-w-2xl mx-auto">
      {elements.map((element, index) => (
        <TimeLineItem key={index} element={element} />
      ))}
    </section>
  </div>
)

export default Timeline
