import Timeline from "@/components/timeline/Timeline"
import { timelineElements } from "@/lib/database"
import { TimeLineItemType } from "@/lib/types/Timeline"
import { Meta, StoryObj } from "@storybook/nextjs-vite"

const getSortedTimeline = () =>
  timelineElements.sort(
    (a: TimeLineItemType, b: TimeLineItemType) =>
      new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
  )
const e = getSortedTimeline()
const meta = {
  title: "Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    elements: e,
  },
}
