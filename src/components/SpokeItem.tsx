import Seat from "@/components/Seat"
import { usePulse } from "@/hooks/usePulse"
import { useSeatPosition } from "@/hooks/useSeatPosition"
import { useSpokePath } from "@/hooks/useSpokePath"
import { TECH_STACK_LINKS } from "@/lib/constants/timeline"
import Link from "next/link"
import { FunctionComponent } from "react"

type SpokeItemProps = {
  spokeAngle: number
  techName: string
  seatRadius: number
  radius: number
  cx: number
  cy: number
  spokeLength: number
  seatOrbitRadius: number
  hovered: boolean
}
const SpokeItem: FunctionComponent<SpokeItemProps> = ({
  spokeAngle,
  techName,
  cx,
  cy,
  seatRadius,
  radius,
  spokeLength,
  seatOrbitRadius,
  hovered,
}) => {
  const techLink =
    techName in TECH_STACK_LINKS
      ? TECH_STACK_LINKS[techName as keyof typeof TECH_STACK_LINKS]
      : "#"
  const seat = useSeatPosition({
    angle: spokeAngle,
    cx,
    cy,
    length: spokeLength,
    radius: seatOrbitRadius,
  })
  const path = useSpokePath({
    spokeAngle,
    cx,
    cy,
    seatX: seat.seatX,
    seatY: seat.seatY,
    radius,
  })
  const { active, pathRef, pathLength } = usePulse(hovered, 50)

  return (
    <g>
      <path d={path} stroke="#026597" strokeWidth={4} fill="none" />
      <path
        ref={pathRef}
        d={path}
        stroke="url(#pulseGradient)"
        strokeWidth={4}
        fill="none"
        strokeDasharray={pathLength}
        strokeDashoffset={hovered ? 0 : pathLength}
        style={{ transition: "stroke-dashoffset 0.6s ease-in-out" }}
      />
      <path
        ref={pathRef}
        d={path}
        stroke="#026597"
        strokeWidth={4}
        fill="none"
        strokeDasharray={pathLength}
        strokeDashoffset={active ? 0 : pathLength}
        style={{ transition: "stroke-dashoffset 0.6s ease-in-out" }}
      />

      <Link href={techLink} className="group cursor-pointer">
        <g transform={`translate(${seat.seatX},${seat.seatY})`}>
          <Seat radius={seatRadius} techName={techName} />
        </g>
      </Link>
    </g>
  )
}

export default SpokeItem
