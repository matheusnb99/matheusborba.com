import { formatDate } from "@/lib/formatDate"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import StackIcon from "../StackIcon"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

type TimelineCardProps = {
  element: TimeLineItemType
}

// Map category to shadow class
const categoryShadow: Record<string, string> = {
  work: "shadow-yellow-400/50 shadow-lg",
  school: "shadow-blue-400/50 shadow-lg",
  project: "shadow-pink-400/50 shadow-lg",
  default: "shadow-2xl",
}

const TimelineCard: FunctionComponent<TimelineCardProps> = ({ element }) => {
  const shadowClass = `${categoryShadow[element.category] || categoryShadow.default} hover:shadow-2xl hover:shadow-black/30 transition-shadow`

  return (
    <Card
      className={`flex flex-col justify-between flex-1 rounded-r-lg ${shadowClass}`}
    >
      <CardHeader>
        <CardTitle>{element.title}</CardTitle>
        <CardDescription>{element.company}</CardDescription>
        <CardDescription>
          {formatDate(element.startDate)} - {formatDate(element.endDate)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mt-2 font-semibold">{element.description}</p>
        {element.tasks && (
          <ul className="list-disc list-inside mt-2">
            {element.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
        {element.url && (
          <a
            href={element.url}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Learn more
          </a>
        )}
      </CardContent>
      <CardFooter>
        {element.technologies.map((tech, index) => (
          <StackIcon key={index} item={tech} />
        ))}
      </CardFooter>
    </Card>
  )
}

export default TimelineCard
