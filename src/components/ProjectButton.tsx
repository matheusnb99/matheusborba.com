import Link from "next/link"
import { FunctionComponent } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

type ProjectButtonProps = {
  url: string | null
  type: "github" | "demo"
}

const texts = {
  github: "View code on Github",
  demo: "View demo",
}
const icons = {
  github: <FaGithub className="mx-2" />,
  demo: <FaExternalLinkAlt className="mx-2" />,
}

const ProjectButton: FunctionComponent<ProjectButtonProps> = ({
  url,
  type,
}) => {
  if (url === null) {
    return <p>This repo is private</p>
  }

  return (
    <Link
      href={url}
      className="flex items-center space-x-2 p-2 mx-1 rounded-2xl bg-cyan-200 w-[200px]"
    >
      {icons[type]} {texts[type]}
    </Link>
  )
}

export default ProjectButton
