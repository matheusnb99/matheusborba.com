import { formatDate } from "@/lib/formatDate"
import { TimeLineItemType } from "@/lib/types/Timeline"
import Link from "next/link"
import { FunctionComponent } from "react"

type BackSideProps = {
  project: TimeLineItemType
  onFlip: () => void
  flipped: boolean
}

const BackSide: FunctionComponent<BackSideProps> = (props) => {
  const { project, onFlip, flipped } = props

  return (
    <div
      className="absolute w-full h-full bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col gap-3 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto"
      onClick={() => {
        onFlip()
      }}
      tabIndex={0}
      role="button"
      aria-pressed={!flipped}
      title="Click to go back"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 capitalize">
          {project.category}
        </span>
      </div>
      <div className="text-gray-500 text-sm mb-1">
        <span>{project.company}</span>
        <span className="mx-2">|</span>
        <span>
          {formatDate(project.startDate)} - {formatDate(project.endDate)}
        </span>
      </div>
      <p className="mb-2">{project.description}</p>
      <div>
        <span className="font-medium text-gray-700">Technologies:</span>
        <ul className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech: string) => (
            <li
              key={tech}
              className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium text-gray-700">Tasks:</span>
        <ul className="list-disc list-inside ml-2 mt-1 text-sm text-gray-600">
          {Array.isArray(project.tasks) && project.tasks.length > 0 ? (
            project.tasks.map((task: string, i: number) => (
              <li key={i}>{task}</li>
            ))
          ) : (
            <li className="text-gray-400 italic">No tasks listed</li>
          )}
        </ul>
      </div>
      <div className="flex gap-3 mt-2">
        {project.gitUrl ? (
          <Link
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium"
          >
            {/* <SiGithub className="w-6 h-6 pr-2" /> */}
            GitHub
          </Link>
        ) : (
          <span className="inline-flex items-center px-3 py-1 bg-gray-300 text-gray-500 rounded text-sm font-medium italic cursor-not-allowed">
            Private Repo
          </span>
        )}
        {project.siteUrl && (
          <Link
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-green-600 hover:underline text-sm font-medium"
          >
            Demo
          </Link>
        )}
      </div>
      <button
        className="mt-4 px-3 py-1 bg-gray-200 rounded text-xs text-gray-700 hover:bg-gray-300 transition"
        onClick={(e) => {
          e.stopPropagation()
          onFlip()
        }}
      >
        Back
      </button>
    </div>
  )
}

export default BackSide
