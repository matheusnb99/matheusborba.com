"use client"
import SpokeItem from "@/components/SpokeItem"
import { useRotationAnimation } from "@/hooks/useRotationAnimation"
import { StackOptions } from "@/lib/types/Timeline"
import { useState } from "react"

const FerrisWheelSection = ({
  stack = [] as { technology: StackOptions; count: number }[],
  size = 200,
  animate = true,
}) => {
  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.4
  const seatRadius = size * 0.075
  const spokeCount = stack.length || 1
  const spokeLength = radius * 0.6
  const seatOrbitRadius = spokeLength
  const angleStep = (2 * Math.PI) / spokeCount
  const [hovered, setHovered] = useState(false)
  const rotation = useRotationAnimation(animate, hovered)
  const spokeRotations = Array(spokeCount)
    .fill(0)
    .map((_, idx) => rotation + idx * angleStep)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g
        clipPath="url(#wheel-clip)"
        onMouseEnter={() => { setHovered(true) }}
        onMouseLeave={() => { setHovered(false) }}
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        {spokeRotations.map((spokeAngle, i) => (
          <SpokeItem
            key={`spoke-${i}`}
            techName={stack[i].technology}
            spokeAngle={spokeAngle}
            cx={cx}
            cy={cy}
            seatRadius={seatRadius}
            radius={radius}
            spokeLength={spokeLength}
            seatOrbitRadius={seatOrbitRadius}
            hovered={hovered}
          />
        ))}

        <circle cx={cx} cy={cy} r={size * 0.06} fill="#0369a1" />
      </g>
    </svg>
  )
}

export default FerrisWheelSection
