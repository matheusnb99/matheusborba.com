"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TECH_STACK_ICONS, TECH_STACK_LINKS } from "@/lib/constants/timeline"
import { StackOptions } from "@/lib/types/Timeline"
import Link from "next/link"
import { FunctionComponent } from "react"

type Props = {
  item: StackOptions
}

const StackIcon: FunctionComponent<Props> = ({ item }) => {
  if (!TECH_STACK_ICONS[item as keyof typeof TECH_STACK_ICONS]) {
    return (
      <span className="px-2 py-2 bg-gray-100 rounded-full text-xs">
        <Link
          href={TECH_STACK_LINKS[item as keyof typeof TECH_STACK_ICONS]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {item}
        </Link>
      </span>
    )
  }

  return (
    <div className="relative flex items-center justify-center p-2">
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={TECH_STACK_LINKS[item as keyof typeof TECH_STACK_ICONS]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {TECH_STACK_ICONS[item as keyof typeof TECH_STACK_ICONS]}
          </Link>
        </TooltipTrigger>
        <TooltipContent>{item}</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default StackIcon
