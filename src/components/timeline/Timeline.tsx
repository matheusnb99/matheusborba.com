import CategoryDropDown from "@/components/CategoryDropDown"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import TimelineCard from "./TimelineCard"

type TimelineProps = {
  elements: TimeLineItemType[]
}

const Timeline: FunctionComponent<TimelineProps> = ({ elements }) => (
  <div className="flex">
    <CategoryDropDown />
    <section className="max-w-2xl mx-auto">
      {elements.map((element, index) => (
        <TimelineCard key={index} element={element} />
      ))}
    </section>
  </div>
)

export default Timeline
