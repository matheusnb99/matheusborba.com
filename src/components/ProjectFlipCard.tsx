"use client"
import BackSide from "@/components/project/BackSide"
import FrontSide from "@/components/project/FrontSide"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { useState } from "react"

const ProjectFlipCard = ({ project }: { project: TimeLineItemType }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="perspective-1000" style={{ perspective: 1000 }}>
      <div
        className={`relative w-full h-96 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <FrontSide
          project={project}
          onFlip={() => {
            setFlipped(true)
          }}
          flipped={flipped}
        />
        <BackSide
          project={project}
          onFlip={() => {
            setFlipped(false)
          }}
          flipped={flipped}
        />
      </div>
    </div>
  )
}

export default ProjectFlipCard
