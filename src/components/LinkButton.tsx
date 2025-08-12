import Link from "next/link"
import { FunctionComponent, ReactNode } from "react"

interface LinkButtonProps {
  href: string
  className?: string
  icon?: ReactNode
  text: string
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  href,
  className = "",
  icon,
  text,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700 transition-colors text-sm font-medium ${className}`}
  >
    <span className="flex items-center">
      {icon && <span className="pr-2">{icon}</span>}
      {text}
    </span>
  </Link>
)

export default LinkButton
