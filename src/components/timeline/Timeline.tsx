import TimelineIcon from "@/components/timeline/TimelineIcon"
import TimeLineItem from "@/components/timeline/TimelineItem"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimelineProps = {
  elements: TimeLineItemType[]
}

const Timeline: FunctionComponent<TimelineProps> = ({ elements }) => (
  <div className="relative flex w-full flex-col items-center mt-10">
    {/* Center vertical line */}
    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2" />

    <div className="flex w-full max-w-2xl">
      <div className="flex flex-col items-end pr-4">
        {elements
          .filter((_, i) => i % 2 === 0)
          .map((element, index) => (
            <div className="my-11" key={index}>
              <div className="absolute  left-1/2  -translate-x-1/2">
                <TimelineIcon category={element.category} />
              </div>
              <TimeLineItem element={element} iconPosition="left" />
            </div>
          ))}
      </div>

      <div className="flex flex-col items-start pl-4 my-72">
        {elements
          .filter((_, i) => i % 2 !== 0)
          .map((element, index) => (
            <div className="my-11" key={index}>
              <div className="absolute  left-1/2  -translate-x-1/2">
                <TimelineIcon category={element.category} />
              </div>
              <TimeLineItem element={element} iconPosition="right" />
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default Timeline
