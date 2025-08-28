import Seat from "@/components/Seat"
import { useSeatPosition } from "@/hooks/useSeatPosition"
import { useSpokePath } from "@/hooks/useSpokePath"
import { TECH_STACK_ICONS, TECH_STACK_LINKS } from "@/lib/constants/timeline"
import extractSVG from "@/lib/extractSVG"
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
}) => {
  const iconElement =
    techName in TECH_STACK_ICONS
      ? TECH_STACK_ICONS[techName as keyof typeof TECH_STACK_ICONS]
      : null
  const techLink =
    techName in TECH_STACK_LINKS
      ? TECH_STACK_LINKS[techName as keyof typeof TECH_STACK_LINKS]
      : "#"
  const iconChildren = extractSVG(iconElement)
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

  return (
    <g>
      {/* S-curve spoke to seat */}
      <path d={path} stroke="#0284c7" strokeWidth={4} fill="none" />

      {/* Seat */}
      <Link href={techLink} className="group cursor-pointer">
        <g
          className="group cursor-pointer"
          transform={`translate(${seat.seatX},${seat.seatY})`}
        >
          <Seat radius={seatRadius} techName={techName} icon={iconChildren} />
        </g>
      </Link>
    </g>
  )
}

export default SpokeItem
