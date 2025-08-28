import { useEffect, useState } from "react"

export const useRotationAnimation = (animate: boolean, paused: boolean) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!animate) {
      return void 0
    }

    let frame: number = 0
    let lastTime = performance.now()
    const loop = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      if (!paused) {
        setRotation((prev) => prev + (delta / 1000) * ((10 * Math.PI) / 180))
      }

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [animate, paused])

  return rotation
}
