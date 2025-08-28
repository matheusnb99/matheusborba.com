import { getSortedTimeline } from "@/app/page"
import Timeline from "@/components/timeline/Timeline"
import { Meta, StoryObj } from "@storybook/nextjs-vite"

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
