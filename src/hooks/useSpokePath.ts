import { useMemo } from "react"

type UseSpokePathProps = {
  spokeAngle: number
  cx: number
  cy: number
  seatX: number
  seatY: number
  radius: number
}

export const useSpokePath = ({
  spokeAngle,
  cx,
  cy,
  seatX,
  seatY,
  radius,
}: UseSpokePathProps) =>
  useMemo(() => {
    const controlOffset = radius * 0.78
    const cp1x = cx + controlOffset * Math.cos(spokeAngle - Math.PI / 2)
    const cp1y = cy + controlOffset * Math.sin(spokeAngle - Math.PI / 2)
    const cp2x = seatX + controlOffset * Math.cos(spokeAngle + Math.PI / 2)
    const cp2y = seatY + controlOffset * Math.sin(spokeAngle + Math.PI / 2)

    return `M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${seatX} ${seatY}`
  }, [spokeAngle, cx, cy, seatX, seatY, radius])
