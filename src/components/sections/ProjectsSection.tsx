import ProjectFlipCard from "@/components/ProjectFlipCard"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type ProjectsSectionProps = {
  projects: TimeLineItemType[]
}

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  projects,
}) => (
  <>
    <h2 className="text-3xl font-bold mb-6">My Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 ">
      {projects.map((project) => (
        <div
          key={project.title + project.company}
          className="col-span-2 lg:col-span-1 "
        >
          <ProjectFlipCard project={project} />
        </div>
      ))}
    </div>
  </>
)

export default ProjectsSection
