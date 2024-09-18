"use client"
import { parseAsString, useQueryState } from "nuqs"
import { FunctionComponent } from "react"

const handleClick = (old: string) => (old === "simple" ? "detail" : "simple")
const ViewButton: FunctionComponent = () => {
  const [view, setView] = useQueryState(
    "view",
    parseAsString.withDefault("simple").withOptions({ shallow: false }),
  )

  return (
    <button onClick={() => setView(handleClick)}>
      {view === "simple" ? "v" : "^"}
    </button>
  )
}

export default ViewButton
