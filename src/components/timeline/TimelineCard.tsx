import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { formatDate } from "@/lib/formatDate"
import StackIcon from "../StackIcon"
import TimelineIcon from "./TimelineIcon"

type TimelineCardProps = {
  element: TimeLineItemType
}

const TimelineCard: FunctionComponent<TimelineCardProps> = ({ element }) => (
  <article className="flex gap-4 pb-10 relative before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200">
    <TimelineIcon category={element.category} />
    <Card className="flex flex-col justify-between flex-1 rounded-r-lg shadow-2xl  ">
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
  </article>
)

export default TimelineCard
