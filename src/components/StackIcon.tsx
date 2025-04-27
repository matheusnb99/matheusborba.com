"use client"
import { TECH_STACK_ICONS } from "@/lib/constants/timeline"
import { StackOptions } from "@/lib/types/Timeline"
<<<<<<< HEAD
import { FunctionComponent, useState } from "react"
=======
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip"
import { FunctionComponent } from "react"
import { FaJava } from "react-icons/fa"
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMicrosoftsharepoint,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPhp,
  SiPowerapps,
  SiPowerautomate,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { TooltipContent, TooltipTrigger } from "./ui/tooltip"
>>>>>>> e97131d21f585e74807c051991f14a1a6d9ef37a

type Props = {
  item: StackOptions
}

const StackIcon: FunctionComponent<Props> = ({ item }) => {
<<<<<<< HEAD
  const [hovered, setHovered] = useState(false)

  if (!TECH_STACK_ICONS[item]) {
=======
  if (!techStackIcons[item]) {
>>>>>>> e97131d21f585e74807c051991f14a1a6d9ef37a
    return (
      <span className="px-2 py-2 bg-gray-100 rounded-full text-xs">{item}</span>
    )
  }

  return (
<<<<<<< HEAD
    <div
      className="relative flex items-center justify-center p-2"
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
    >
      {TECH_STACK_ICONS[item]}
      {hovered && (
        <div className="absolute top-0 left-0 z-10 bg-white shadow-lg p-2 rounded-lg text-xs">
          {item}
        </div>
      )}
=======
    <div className="relative flex items-center justify-center p-2">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>{techStackIcons[item]}</TooltipTrigger>
          <TooltipContent>
            <p>{item}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
>>>>>>> e97131d21f585e74807c051991f14a1a6d9ef37a
    </div>
  )
}

export default StackIcon
