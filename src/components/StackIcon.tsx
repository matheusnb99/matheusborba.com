"use client"
import { StackOptions } from "@/lib/types/Timeline"
import { FunctionComponent, useState } from "react"
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

type Props = {
  item: StackOptions
}

const techStackIcons = {
  "JavaScript": <SiJavascript className="w-6 h-6" />,
  "TypeScript": <SiTypescript className="w-6 h-6" />,
  "React": <SiReact className="w-6 h-6" />,
  "NextJs": <SiNextdotjs className="w-6 h-6" />,
  "php": <SiPhp className="w-6 h-6" />,
  "docker": <SiDocker className="w-6 h-6" />,
  "Django": <SiDjango className="w-6 h-6" />,
  "MySql": <SiMysql className="w-6 h-6" />,
  "MongoDB": <SiMongodb className="w-6 h-6" />,
  "Redis": <SiRedis className="w-6 h-6" />,
  "Tailwind": <SiTailwindcss className="w-6 h-6" />,
  "HTML": <SiHtml5 className="w-6 h-6" />,
  "CSS": <SiCss3 className="w-6 h-6" />,
  "Java": <FaJava className="w-6 h-6" />,
  "Spring Boot": <SiSpringboot className="w-6 h-6" />,
  "Prisma": <SiPrisma className="w-6 h-6" />,
  "Notion": <SiNotion className="w-6 h-6" />,
  "Github": <SiGithub className="w-6 h-6" />,
  "Github Actions": <SiGithubactions className="w-6 h-6" />,
  "Express": <SiExpress className="w-6 h-6" />,
  "Next Auth": null,
  "Docker": <SiDocker className="w-6 h-6" />,
  "Tanstack Query": null,
  "Linear": <SiReact className="w-6 h-6" />,
  "Power Apps": <SiPowerapps className="w-6 h-6" />,
  "Power Automate": <SiPowerautomate className="w-6 h-6" />,
  "SharePoint": <SiMicrosoftsharepoint className="w-6 h-6" />,
  "AgilePoint": null,
}
const StackIcon: FunctionComponent<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  if (!techStackIcons[item]) {
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
      {techStackIcons[item]}
      {hovered && (
        <div className="absolute top-0 left-0 z-10 bg-white shadow-lg p-2 rounded-lg text-xs">
          {item}
        </div>
      )}
    </div>
  )
}

export default StackIcon
