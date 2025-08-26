import { ProjectType } from "@/lib/types/Timeline"
import Image from "next/image"
import { FunctionComponent } from "react"
import ProjectButton from "./project/ProjectButton"
import StackIcon from "./StackIcon"

type ProjectCardProps = {
  project: ProjectType
  expanded: boolean
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
  expanded,
}) => {
  const width = expanded ? 500 : 300
  const height = expanded ? 500 : 300

  return (
    <div
      className={`${expanded ? "w-2/4 h-[500px] absolute left-1/4" : ""} bg-gray-200 rounded-2xl`}
    >
      <div className="flex justify-center ">
        <Image src={project.image} alt="img" width={width} height={height} />
      </div>
      <div className="flex justify-between gap-2">
        <h2 className="px-10 py-5 text-xl font-bold">{project.title}</h2>
        {expanded && (
          <div className="flex justify-around px-4">
            <ProjectButton url={project.github} type="github" />
            <ProjectButton url={project.demo} type="demo" />
          </div>
        )}
      </div>
      <div>{project.description}</div>
      <div className="mt-2 flex flex-wrap justify-end	">
        {project.stack.map((stack) => (
          <StackIcon key={stack} item={stack} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
