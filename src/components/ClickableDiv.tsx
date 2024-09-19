"use client"
import { parseAsString, useQueryState } from "nuqs"
import { FunctionComponent, useRef } from "react"

import { useOnClickOutside } from "usehooks-ts"

type ClickableDivProps = {
  id: string
  expanded: boolean
  children: React.ReactNode
}

const ClickableDiv: FunctionComponent<ClickableDivProps> = ({
  id,
  expanded,
  children,
}) => {
  const [projectId, setProjectId] = useQueryState(
    "projectId",
    parseAsString.withOptions({ shallow: false, scroll: false }),
  )
  const ref = useRef(null)

  const handleClickOutside = () => {
    if (expanded) {
      setProjectId(null)
    }
  }

  useOnClickOutside(ref, handleClickOutside)

  if (projectId && projectId !== id) {
    console.log("hidden")
    return null
  }

  return (
    <div
      className={`${!expanded ? "cursor-pointer" : ""} p-2`}
      onClick={() => {
        setProjectId(id)
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default ClickableDiv
