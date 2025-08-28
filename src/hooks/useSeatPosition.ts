import { useMemo } from "react"

type SeatPosArgs = {
  angle: number
  cx: number
  cy: number
  length: number
  radius: number
}

export const useSeatPosition = ({
  angle,
  cx,
  cy,
  length,
  radius,
}: SeatPosArgs) => useMemo(() => {
    const baseX = cx + length * Math.cos(angle)
    const baseY = cy + length * Math.sin(angle)

    return {
      seatX: baseX + radius * -Math.sin(angle),
      seatY: baseY + radius * Math.cos(angle),
    }
  }, [angle, cx, cy, length, radius])
