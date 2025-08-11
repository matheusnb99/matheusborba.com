import { FunctionComponent } from "react"

type CarrerSectionProps = {}
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

const CarrerSection: FunctionComponent<CarrerSectionProps> = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {fakeProjects.map((project, idx) => (
          <div
            key={project.title + project.company}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 capitalize">
                {project.category}
              </span>
            </div>
            <div className="text-gray-500 text-sm mb-1">
              <span>{project.company}</span>
              <span className="mx-2">|</span>
              <span>
                {project.startDate} - {project.endDate}
              </span>
            </div>
            <p className="mb-2">{project.description}</p>
            <div>
              <span className="font-medium text-gray-700">Technologies:</span>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {project.tasks && (
              <div>
                <span className="font-medium text-gray-700">Tasks:</span>
                <ul className="list-disc list-inside ml-2 mt-1 text-sm text-gray-600">
                  {project.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                Visit Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarrerSection
