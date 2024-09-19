import { ProjectType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import StackIcon from "./StackIcon"
import Image from "next/image"
import ProjectButton from "./ProjectButton"

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
      className={`${expanded ? "w-[500px] h-[500px]" : ""} bg-gray-200 rounded-2xl`}
    >
      <Image src={project.image} alt="img" width={width} height={height} />
      <div className="flex justify-between gap-2">
        <div>{project.title}</div>
        {expanded && (
          <div className="flex justify-around w-52 ">
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
