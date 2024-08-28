import Timeline from "@/components/Timeline"
import type { TimeLineItemType } from "@/lib/types/Timeline"

const elements: TimeLineItemType[] = [
  {
    title: "Started Learning JavaScript",
    startDate: "2020-01-01",
    endDate: "2020-01-01",
    description:
      "Began my journey into web development by learning JavaScript.",
    company: "",
    category: "work",
    technologies: [],
  },
  {
    title: "Built My First Website",
    description:
      "Created my first personal website using HTML, CSS, and JavaScript.",
    company: "",
    startDate: "",
    endDate: "",
    category: "work",
    technologies: [],
  },
  {
    title: "Learned React",
    description:
      "Started learning React to build more dynamic web applications.",
    company: "",
    startDate: "",
    endDate: "",
    category: "work",
    technologies: [],
  },
]
const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Timeline elements={elements} />
  </main>
)

export default Home
