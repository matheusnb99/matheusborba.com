import CategoryDropDown from "@/components/CategoryDropDown"
import TimelineCard from "@/components/timeline/TimelineCard"
import TimelineItem from "@/components/timeline/TimelineItem"
import type { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimelineProps = {
  elements: TimeLineItemType[]
}

const Timeline: FunctionComponent<TimelineProps> = ({ elements }) => (
  <div className="relative flex w-full flex-col items-center mt-10">
    <div className="z-20">
      <CategoryDropDown />
    </div>

    {/* Center (or left) vertical line */}
    <div
      className="absolute top-0 h-full w-0.5 bg-gray-300 
                    left-0 md:left-1/2 md:-translate-x-1/2 "
    />

    {/* Timeline container */}
    <div className="flex flex-col md:flex-row w-full max-w-6xl">
      {/* Full-width column on mobile, split into two on md+ */}
      <div className="flex flex-col w-full md:w-1/2 md:items-end px-4 md:px-8">
        {elements
          .filter((_, i) => i % 2 === 0)
          .map((element, index) => (
            <TimelineItem
              key={index}
              category={element.category}
              direction="left"
            >
              <TimelineCard element={element} borderDirection="right" />
            </TimelineItem>
          ))}
      </div>

      <div className="flex flex-col w-full md:w-1/2 md:items-start px-4 md:px-8 md:pt-44">
        {elements
          .filter((_, i) => i % 2 !== 0)
          .map((element, index) => (
            <TimelineItem
              key={index}
              category={element.category}
              direction="right"
            >
              <TimelineCard element={element} borderDirection="left" />
            </TimelineItem>
          ))}
      </div>
    </div>
  </div>
)

export default Timeline
