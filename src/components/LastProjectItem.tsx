import { formatDate } from "@/lib/formatDate"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type LastProjectItemProps = {
  element: TimeLineItemType
}

const LastProjectItem: FunctionComponent<LastProjectItemProps> = ({
  element,
}) => (
  <div className="shadow-2xl rounded-r-lg min-w-[400px] grow w-full px-10 py-5">
    <h3 className="text-lg font-semibold pb-2">{element.title}</h3>
    <p className="text-base text-gray-500">{element.company}</p>
    <p className="text-base text-gray-500">
      {formatDate(element.startDate)} - {formatDate(element.endDate)}
    </p>
  </div>
)

export default LastProjectItem
