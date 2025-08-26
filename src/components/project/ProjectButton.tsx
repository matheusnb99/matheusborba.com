import Link from "next/link"
import { FunctionComponent } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

type ProjectButtonProps = {
  url?: string
  type: "github" | "demo"
}

const variants = {
  github: {
    text: "Github",
    noUrl: "Private Repo",
    noUrlCSS:
      "inline-flex items-center px-3 py-1 bg-gray-300 text-gray-500 rounded text-sm font-medium italic cursor-not-allowed",
    icon: <FaGithub className="mx-2" />,
  },
  demo: {
    text: "View demo",
    noUrl: "",
    noUrlCSS: "",
    icon: <FaExternalLinkAlt className="mx-2" />,
  },
}
const ProjectButton: FunctionComponent<ProjectButtonProps> = ({
  url,
  type,
}) => {
  if (!url) {
    return (
      <span className={variants[type].noUrlCSS}>{variants[type].noUrl}</span>
    )
  }

  return (
    <Link
      href={url}
      className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium"
    >
      {variants[type].icon} {variants[type].text}
    </Link>
  )
}

export default ProjectButton
