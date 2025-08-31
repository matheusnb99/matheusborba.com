import TimelineIcon from "@/components/timeline/TimelineIcon"
import { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta = {
  title: "Timeline Icon",
  component: TimelineIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimelineIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    category: "work",
    direction: "left",
  },
}
