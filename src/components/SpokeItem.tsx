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
type CalculateSeatPosType = {
  angle: number
  cx: number
  cy: number
  length: number
  radius: number
}

const calculateSeatPos = ({
  angle,
  cx,
  cy,
  length,
  radius,
}: CalculateSeatPosType) => {
  const baseX = cx + length * Math.cos(angle)
  const baseY = cy + length * Math.sin(angle)

  return {
    seatX: baseX + radius * -Math.sin(angle),
    seatY: baseY + radius * Math.cos(angle),
  }
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
  const seat = calculateSeatPos({
    angle: spokeAngle,
    cx,
    cy,
    length: spokeLength,
    radius: seatOrbitRadius,
  })
  const controlOffset = radius * 0.78
  const cp1x = cx + controlOffset * Math.cos(spokeAngle - Math.PI / 2)
  const cp1y = cy + controlOffset * Math.sin(spokeAngle - Math.PI / 2)
  const cp2x = seat.seatX + controlOffset * Math.cos(spokeAngle + Math.PI / 2)
  const cp2y = seat.seatY + controlOffset * Math.sin(spokeAngle + Math.PI / 2)

  
return (
    <g>
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
}

export default SpokeItem
