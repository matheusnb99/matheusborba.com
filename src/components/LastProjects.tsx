import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

interface LastProjectsProps {
  elements: TimeLineItemType[]
}

const LastProjects: FunctionComponent<LastProjectsProps> = ({ elements }) => (
  <div>
    <h2>Last Projects</h2>
    <ul>
      {elements.map((element) => (
        <li key={element.title}>
          <h3>{element.title}</h3>
          <p>{element.endDate.toISOString()}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default LastProjects
