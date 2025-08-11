"use client"
import LastProjects from "@/components/LastProjects"
import { MotionDiv } from "@/components/motion/MotionDiv"
import Timeline from "@/components/timeline/Timeline"
import TimelineToggle from "@/components/TimelineToggle"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { AnimatePresence, LayoutGroup } from "framer-motion"
import { useQueryState } from "nuqs"
import { FunctionComponent } from "react"

type TimelineSectionProps = {
  highlightedList: TimeLineItemType[]
  filteredElements: TimeLineItemType[]
}

const TimelineSection: FunctionComponent<TimelineSectionProps> = ({
  highlightedList,
  filteredElements,
}) => {
  const [view] = useQueryState("view", {
    defaultValue: "simple",
    shallow: false,
  })
  const simpleView = view === "simple"

  return (
    <section className="h-[80vh] xl:w-[60%]">
      <TimelineToggle />
      <h2 className="text-4xl mb-3">
        <span className={`strike ${!simpleView ? "strike-active" : ""}`}>
          My last experience
        </span>
        <span>{!simpleView && " My whole career"}</span>
      </h2>

      <LayoutGroup id="timeline-shared">
        <AnimatePresence mode="popLayout" initial={false}>
          {simpleView ? (
            <MotionDiv
              key="simple"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <LastProjects elements={highlightedList} />
            </MotionDiv>
          ) : (
            <MotionDiv
              key="detailed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Timeline elements={filteredElements} />
            </MotionDiv>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  )
}

export default TimelineSection
