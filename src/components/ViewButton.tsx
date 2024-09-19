"use client"
import { parseAsString, useQueryState } from "nuqs"
import { FunctionComponent } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const handleClick = (old: string) => (old === "simple" ? "detail" : "simple")

type ViewButtonProps = {
  order?: string
}

const ViewButton: FunctionComponent<ViewButtonProps> = ({ order = "" }) => {
  const [view, setView] = useQueryState(
    "view",
    parseAsString.withDefault("simple").withOptions({ shallow: false }),
  )

  return (
    <button className={`p-3 ${order}`} onClick={() => setView(handleClick)}>
      {view === "simple" ? <FaArrowDown /> : <FaArrowUp />}
    </button>
  )
}

export default ViewButton
