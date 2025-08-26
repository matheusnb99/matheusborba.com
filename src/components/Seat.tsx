import { FunctionComponent, ReactNode } from "react"

type SeatProps = {
  radius: number
  techName: string
  icon: ReactNode
}

const Seat: FunctionComponent<SeatProps> = ({ radius, techName, icon }) => (
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
    <text x={0} y={radius * 0.9 - 20} fontSize={radius / 4} textAnchor="middle">
      {techName}
    </text>
  </>
)

export default Seat
