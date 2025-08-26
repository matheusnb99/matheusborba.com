"use client"
import SpokeItem from "@/components/SpokeItem"
import { StackOptions } from "@/lib/types/Timeline"
import { useEffect, useState } from "react"

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
  const [rotation, setRotation] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!animate) {
      return
    }

    let frame: number = 0
    let lastTime = performance.now()
    const loop = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      if (!hovered) {
        setRotation((prev) => prev + (delta / 1000) * ((10 * Math.PI) / 180))
      }

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)

    /* eslint-disable consistent-return*/

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [animate, hovered])

  const spokeRotations = Array(spokeCount)
    .fill(0)
    .map((_, idx) => rotation + idx * angleStep)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
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
        />
      ))}

      <circle cx={cx} cy={cy} r={size * 0.06} fill="#0369a1" />
    </svg>
  )
}

export default FerrisWheelSection
