import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type FrontSideProps = {
  project: TimeLineItemType
  onFlip: () => void
  flipped: boolean
}

const FrontSide: FunctionComponent<FrontSideProps> = ({
  project,
  onFlip,
  flipped,
}) => (
  <div
    className="absolute w-full h-full bg-white rounded-lg shadow-md border border-gray-100 flex flex-col items-center justify-center cursor-pointer [backface-visibility:hidden]"
    onClick={() => {
      onFlip()
    }}
    tabIndex={0}
    role="button"
    aria-pressed={flipped}
    title="Click to see details"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-56 object-cover rounded-t-lg mb-4"
    />
    <h3 className="text-xl font-semibold text-center">{project.description}</h3>
    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 capitalize mt-2">
      {project.category}
    </span>
    <span className="mt-2 text-sm text-gray-500">Click to flip</span>
  </div>
)

export default FrontSide
