import { FunctionComponent } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ProjectType } from "@/lib/types/Timeline"

type SimpleProjectProps = {
  project: ProjectType
  expanded: boolean
}

const SimpleProject: FunctionComponent<SimpleProjectProps> = ({
  project,
  expanded,
}) => {
  if (expanded) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardDescription>Start Date - End Date</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default SimpleProject
