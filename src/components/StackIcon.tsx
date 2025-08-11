"use client"
import { TECH_STACK_ICONS } from "@/lib/constants/timeline"
import { StackOptions } from "@/lib/types/Timeline"
import { FunctionComponent, useState } from "react"

type Props = {
  item: StackOptions
}

const StackIcon: FunctionComponent<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  if (!(item in TECH_STACK_ICONS)) {
    return (
      <span className="px-2 py-2 bg-gray-100 rounded-full text-xs">{item}</span>
    )
  }

  return (
    <div
      className="relative flex items-center justify-center p-2"
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
      {TECH_STACK_ICONS[item as keyof typeof TECH_STACK_ICONS]}
      {hovered && (
        <div className="absolute top-0 left-0 z-10 bg-white shadow-lg p-2 rounded-lg text-xs">
          {item}
        </div>
      )}
    </div>
  )
}

export default StackIcon
