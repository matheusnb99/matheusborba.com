"use client"
import ProjectFlipCard from "@/components/ProjectFlipCard"
import { FunctionComponent } from "react"

const fakeProjects = [
  {
    title: "Portfolio Website",
    company: "Personal",
    startDate: "2023-01-01",
    endDate: "2023-03-01",
    description:
      "Built a personal portfolio website using Next.js and Tailwind CSS.",
    category: "project",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    tasks: [
      "Designed responsive UI",
      "Implemented dark mode",
      "Deployed on Vercel",
    ],
    url: "https://myportfolio.com",
  },
  {
    title: "E-commerce Dashboard",
    company: "Freelance",
    startDate: "2022-09-01",
    endDate: "2022-12-15",
    description: "Developed an admin dashboard for an e-commerce platform.",
    category: "project",
    technologies: ["React", "Redux", "Chart.js"],
    tasks: [
      "Created sales analytics charts",
      "Integrated REST API",
      "User management features",
    ],
    url: "https://ecommerce-dashboard.com",
  },
  {
    title: "Chat App",
    company: "Hackathon",
    startDate: "2023-04-10",
    endDate: "2023-04-12",
    description:
      "Real-time chat application built in 48 hours for a hackathon.",
    category: "project",
    technologies: ["Node.js", "Socket.io", "React"],
    tasks: [
      "Implemented real-time messaging",
      "User authentication",
      "Deployed with Docker",
    ],
    url: "https://hackathon-chatapp.com",
  },
]
const ProjectsSection: FunctionComponent = () => (
  <>
    <h2 className="text-3xl font-bold mb-6">My Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {fakeProjects.map((project, idx) => {
        let imageUrl =
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"

        if (idx === 0) {
          imageUrl =
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        } else if (idx === 1) {
          imageUrl =
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
        }

        return (
          <div
            key={project.title + project.company}
            className="col-span-2 lg:col-span-1"
          >
            <ProjectFlipCard project={project} imageUrl={imageUrl} />
          </div>
        )
      })}
    </div>
  </>
)

export default ProjectsSection
