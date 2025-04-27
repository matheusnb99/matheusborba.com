"use client"
import { parseAsString, useQueryState } from "nuqs"
import React, { FunctionComponent, useRef } from "react"

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
    parseAsString.withOptions({ scroll: false }),
  )
  const ref = useRef(null)
  const handleClickOutside = () => {
    if (expanded) {
      void setProjectId(null)
    }
  }

  useOnClickOutside(ref, handleClickOutside)

  if (projectId && projectId !== id) {
    return null
  }

  return (
    <div
      className={`${!expanded ? "cursor-pointer" : ""} p-2`}
      onClick={() => {
        void setProjectId(id)
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default ClickableDiv
