"use client"

import { parseAsString, useQueryState } from "nuqs"
import { FunctionComponent } from "react"

const handleClick = (prevView: string) =>
  prevView === "simple" ? "detailed" : "simple"
const TimelineToggle: FunctionComponent = () => {
  const [view, setView] = useQueryState(
    "view",
    parseAsString.withDefault("simple").withOptions({ shallow: false }),
  )
  const [, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("all").withOptions({ shallow: false }),
  )
  const handleChange = async () => {
    await setView(handleClick)
    await setCategory("all")
  }

  return (
    <button
      className="text-sm text-gray-500 hover:text-gray-700 un"
      onClick={handleChange}
    >
      {view === "simple" ? "See detailed timeline" : "See simple timeline"}
    </button>
  )
}

export default TimelineToggle
