import LinkButton from "@/components/LinkButton"
import { abuget } from "@/lib/font/font"
import { FunctionComponent } from "react"
import { MdEmail } from "react-icons/md"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { TbFileCv } from "react-icons/tb"

const HeaderSection: FunctionComponent = () => (
  <header className="flex mt-[20%] xl:ml-28">
    <div className="flex flex-col">
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
            Passionate about technological trends, I provide quick, effective,
            and innovative solutions to meet business needs
          </span>
        </h1>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center gap-4 mt-8">
        <div className="flex flex-row gap-4">
          <LinkButton
            href="https://github.com/matheusnborba"
            text="GitHub"
            icon={<SiGithub className="w-6 h-6" />}
            className="bg-gray-900 hover:bg-gray-700"
          />
          <LinkButton
            href="https://linkedin.com/in/matheus-nunes-borba"
            text="LinkedIn"
            icon={<SiLinkedin className="w-6 h-6" />}
            className="bg-[#0A66C2] hover:bg-[#004182]"
          />
          <LinkButton
            href="/cv/MatheusNunesBorba_CV_EN.pdf"
            text="CV"
            icon={<TbFileCv className="w-6 h-6" />}
            className="bg-green-600 hover:bg-green-700"
          />
          <LinkButton
            href="mailto:contact@matheusborba.com"
            text="Email"
            icon={<MdEmail className="w-6 h-6" />}
            className="bg-pink-600 hover:bg-pink-700"
          />
        </div>
      </div>
    </div>
  </header>
)

export default HeaderSection
