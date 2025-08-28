import { TECH_STACK_ICONS } from "@/lib/constants/timeline"
import extractSVG from "@/lib/extractSVG"
import { FunctionComponent } from "react"

type SeatProps = {
  radius: number
  techName: string
}

const Seat: FunctionComponent<SeatProps> = ({ radius, techName }) => {
  const iconElement =
    techName in TECH_STACK_ICONS
      ? TECH_STACK_ICONS[techName as keyof typeof TECH_STACK_ICONS]
      : null
  const icon = extractSVG(iconElement)

  return (
    <>
      <circle
        cx={0}
        cy={0}
        r={radius}
        className="fill-gray-200 group-hover:fill-gray-400"
      />
      <svg
        x={-radius / 2}
        y={-radius / 2 - 5}
        width={radius}
        height={radius * 0.8}
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      <text
        x={0}
        y={radius * 0.9 - 20}
        fontSize={radius / 4}
        textAnchor="middle"
      >
        {techName}
      </text>
    </>
  )
}

export default Seat
