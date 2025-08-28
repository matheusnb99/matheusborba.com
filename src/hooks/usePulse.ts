import { useEffect, useRef, useState } from "react"

export const usePulse = (hovered: boolean, delay = 50) => {
  const [active, setActive] = useState(false)
  const [pathLength, setPathLength] = useState(0)
  const pathRef = useRef<SVGPathElement>(null)
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [])

  useEffect(() => {
    if (!hovered) {
      setActive(false)

      return void 0
    }

    setActive(false)
    const timer = setTimeout(() => {
      setActive(true)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [hovered, delay])

  return { active, pathRef, pathLength }
}
