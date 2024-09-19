import { abuget } from "@/lib/font/font"
import { FunctionComponent } from "react"

const HeaderSection: FunctionComponent = () => (
  <header className="flex mt-80 md:ml-28 sm:ml-10">
    <div className="w-4/6 md:min-w-[800px] sm:min-w-[400px]">
      <h1 className="lg:text-5xl font-bold mb-10 md:text-4xl">
        <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600">
          Hello, my name is
        </span>
        <span
          className={`text-7xl font-normal tracking-wide whitespace-nowrap block ${abuget.className}`}
        >
          Matheus Nunes Borba.
        </span>
        <span className="font-bold">
          Passionate about technological trends, I provide quick, effective, and
          innovative solutions to meet business needs
        </span>
      </h1>
    </div>
  </header>
)

export default HeaderSection
