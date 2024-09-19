import CategoryDropDown from "@/components/CategoryDropDown"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import TimeLineItem from "./TimelineItem"

type TimelineProps = {
  elements: TimeLineItemType[]
}

const Timeline: FunctionComponent<TimelineProps> = ({ elements }) => (
  <>
    <CategoryDropDown />
    <section className="max-w-2xl mx-auto">
      {elements.map((element, index) => (
        <TimeLineItem key={index} element={element} />
      ))}
    </section>
  </>
)

export default Timeline
