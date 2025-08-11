import { formatDate } from "@/lib/formatDate"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type LastProjectCardProps = {
  element: TimeLineItemType
}

const LastProjectCard: FunctionComponent<LastProjectCardProps> = ({
  element,
}) => (
  <Card className="flex flex-col justify-between  grow  rounded-r-lg shadow-2xl w-1/3">
    <CardHeader>
      <CardTitle>{element.title}</CardTitle>
      <CardDescription>{element.company}</CardDescription>
      <CardDescription>
        {formatDate(element.startDate)} - {formatDate(element.endDate)}
      </CardDescription>
    </CardHeader>
  </Card>
)

export default LastProjectCard
