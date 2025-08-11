import { useState } from "react"

type FakeProjectsType = {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
  category: string
  technologies: string[]
  tasks: string[]
  url: string
}

const ProjectFlipCard = ({
  project,
  imageUrl,
}: {
  project: FakeProjectsType
  imageUrl: string
}) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="perspective-1000" style={{ perspective: 1000 }}>
      <div
        className={`relative w-full h-72 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-md border border-gray-100 flex flex-col items-center justify-center cursor-pointer [backface-visibility:hidden]"
          onClick={() => { setFlipped(true) }}
          tabIndex={0}
          role="button"
          aria-pressed={flipped}
          title="Click to see details"
        >
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-center">{project.title}</h3>
          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 capitalize mt-2">
            {project.category}
          </span>
          <span className="mt-2 text-sm text-gray-500">Click to flip</span>
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col gap-3 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto"
          onClick={() => { setFlipped(false) }}
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
              {project.startDate} - {project.endDate}
            </span>
          </div>
          <p className="mb-2">{project.description}</p>
          <div>
            <span className="font-medium text-gray-700">Technologies:</span>
            <ul className="flex flex-wrap gap-2 mt-1">
              {project.technologies.map((tech) => (
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
              {project.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline text-sm font-medium"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              Visit Project
            </a>
          )}
          <button
            className="mt-4 px-3 py-1 bg-gray-200 rounded text-xs text-gray-700 hover:bg-gray-300 transition"
            onClick={(e) => {
              e.stopPropagation()
              setFlipped(false)
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectFlipCard
