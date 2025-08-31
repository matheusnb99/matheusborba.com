import { formatDate } from "@/lib/formatDate"
import { TimeLineItemType } from "@/lib/types/Timeline"
import Link from "next/link"
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
  borderDirection?: "right" | "left"
}

// Map category to shadow class
const categoryShadow: Record<string, string> = {
  work: "shadow-yellow-400/50 shadow-lg ",
  school: "shadow-blue-400/50 shadow-lg ",
  project: "shadow-pink-400/50 shadow-lg ",
  default: "shadow-2xl",
}
const direction: Record<string, string> = {
  right: "rounded-r-lg",
  left: "rounded-l-lg",
  default: "rounded-lg",
}
const TimelineCard: FunctionComponent<TimelineCardProps> = ({
  element,
  borderDirection = "default",
}) => {
  const shadowClass = `${categoryShadow[element.category] || categoryShadow.default}  transition-shadow`

  return (
    <Card
      className={`flex flex-col rounded- justify-between flex-1  ${direction[borderDirection]} ${shadowClass} h-full border-slate-300 `}
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
            {element.tasks.slice(0, 3).map((task, index) => (
              <li key={index}>{task}</li>
            ))}
            {element.tasks.length > 3 && (
              <div className="flex justify-center mt-2">
                <Link
                  href={`#projectId=${element.id}`}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition text-sm font-medium"
                >
                  See more
                </Link>
              </div>
            )}
          </ul>
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
