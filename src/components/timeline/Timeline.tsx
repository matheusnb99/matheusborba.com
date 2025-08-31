import CategoryDropDown from "@/components/CategoryDropDown"
import SpringAnimation from "@/components/timeline/SpringAnimation"
import TimelineCard from "@/components/timeline/TimelineCard"
import TimelineIcon from "@/components/timeline/TimelineIcon"
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
    {/* Center vertical line */}
    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300  -translate-x-1/2 " />

    <div className="flex w-full max-w-6xl">
      <div className="flex flex-col items-end w-1/2 px-8">
        {elements
          .filter((_, i) => i % 2 === 0)
          .map((element, index) => (
            <div className="my-11 w-full" key={index}>
              <div className="absolute  left-1/2 -translate-x-[17px] mt-5">
                <TimelineIcon category={element.category} direction="left" />
              </div>
              <div className="justify-start">
                <SpringAnimation>
                  <TimelineCard element={element} borderDirection="right" />
                </SpringAnimation>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-start my-72 w-1/2 px-8">
        {elements
          .filter((_, i) => i % 2 !== 0)
          .map((element, index) => (
            <div className="my-11 w-full" key={index}>
              <div className="absolute left-1/2 -translate-x-[17px] mt-5">
                <TimelineIcon category={element.category} direction="right" />
              </div>
              <div className="justify-end">
                <SpringAnimation>
                  <TimelineCard element={element} borderDirection="left" />
                </SpringAnimation>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default Timeline
