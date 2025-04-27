import { abuget } from "@/lib/font/font"
import { FunctionComponent } from "react"

const HeaderSection: FunctionComponent = () => (
  <header className="flex mt-[20%] ml-28">
    <div className="w-1/2">
      <h1 className="lg:text-6xl  text-3xl font-bold mb-10 ">
        <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-600">
          Hello, my name is
        </span>
        <span
          className={`text-7xl font-normal tracking-wide whitespace-nowrap block ${abuget.className}`}
        >
          Matheus Nunes Borba.
        </span>
        <span className="lg:text-5xl text-2xl font-bold">
          Passionate about technological trends, I provide quick, effective, and
          innovative solutions to meet business needs
        </span>
      </h1>
    </div>
  </header>
)

export default HeaderSection
