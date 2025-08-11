import LastProjects from "@/components/LastProjects"
import { ClientAnimatePresence } from "@/components/motion/ClientAnimatePresence"
import { ClientLayoutGroup } from "@/components/motion/ClientLayoutGroup"
import { MotionDiv } from "@/components/motion/MotionDiv"
import Timeline from "@/components/timeline/Timeline"
import TimelineToggle from "@/components/TimelineToggle"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type TimelineSectionProps = {
  highlightedList: TimeLineItemType[]
  filteredElements: TimeLineItemType[]
  view?: string
}

const TimelineSection: FunctionComponent<TimelineSectionProps> = ({
  highlightedList,
  filteredElements,
  view = "simple",
}) => {
  const simpleView = view === "simple"

  return (
    <>
      <TimelineToggle />
      <h2 className="text-4xl mb-3">
        <span className={`strike ${!simpleView ? "strike-active" : ""}`}>
          My last experience
        </span>
        <span>{!simpleView && " My whole career"}</span>
      </h2>

      <ClientLayoutGroup id="timeline-shared">
        <ClientAnimatePresence mode="popLayout" initial={false}>
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
        </ClientAnimatePresence>
      </ClientLayoutGroup>
    </>
  )
}

export default TimelineSection
