"use client"
import { TECH_STACK_ICONS, TECH_STACK_LINKS } from "@/lib/constants/timeline"
import extractSVG from "@/lib/extractSVG"
import { StackOptions } from "@/lib/types/Timeline"
import Link from "next/link"
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

  // Rotation des 4 spokes, chacune avec un offset de 45° (PI/4)
  const spokeRotations = Array(spokeCount)
    .fill(0)
    .map((_, idx) => rotation + idx * angleStep)

  // Calcule position des deux sièges sur chaque spoke
  // Un siège à + seatOrbitRadius, l’autre à - seatOrbitRadius (symétrie)
  function seatsPos(spokeAngle: number) {
    const baseX = cx + spokeLength * Math.cos(spokeAngle)
    const baseY = cy + spokeLength * Math.sin(spokeAngle)

    return {
      seatX: baseX + seatOrbitRadius * -Math.sin(spokeAngle),
      seatY: baseY + seatOrbitRadius * Math.cos(spokeAngle),
    }
  }

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
      {spokeRotations.map((spokeAngle, i) => {
        const techName = stack[i].technology
        const iconElement =
          techName in TECH_STACK_ICONS
            ? TECH_STACK_ICONS[techName as keyof typeof TECH_STACK_ICONS]
            : null
        const techLink =
          techName in TECH_STACK_LINKS
            ? TECH_STACK_LINKS[techName as keyof typeof TECH_STACK_LINKS]
            : "#"
        const iconChildren = extractSVG(iconElement)
        const seat = seatsPos(spokeAngle)
        const controlOffset = radius * 0.78
        const cp1x = cx + controlOffset * Math.cos(spokeAngle - Math.PI / 2)
        const cp1y = cy + controlOffset * Math.sin(spokeAngle - Math.PI / 2)
        const cp2x =
          seat.seatX + controlOffset * Math.cos(spokeAngle + Math.PI / 2)
        const cp2y =
          seat.seatY + controlOffset * Math.sin(spokeAngle + Math.PI / 2)

        return (
          <g key={`spoke-${i}`}>
            {/* S-curve spoke to seat */}
            <path
              d={`
                  M ${cx} ${cy} 
                  C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${seat.seatX} ${seat.seatY}
                `}
              stroke="#0284c7"
              strokeWidth={4}
              fill="none"
            />

            {/* Seat */}
            <Link href={techLink} className="group cursor-pointer">
              <g
                className="group cursor-pointer"
                transform={`translate(${seat.seatX},${seat.seatY})`}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={seatRadius}
                  className="fill-gray-200 group-hover:fill-gray-400"
                />
                <svg
                  x={-seatRadius / 2}
                  y={-seatRadius / 2 - 5}
                  width={seatRadius}
                  height={seatRadius * 0.8}
                  viewBox="0 0 24 24"
                >
                  {iconChildren}
                </svg>
                <text
                  x={0}
                  y={seatRadius * 0.9 - 20}
                  fontSize={seatRadius / 4}
                  textAnchor="middle"
                >
                  {techName}
                </text>
              </g>
            </Link>
          </g>
        )
      })}

      <circle cx={cx} cy={cy} r={size * 0.06} fill="#0369a1" />
    </svg>
  )
}

export default FerrisWheelSection
