import { TECH_STACK_ICONS } from "@/lib/constants/timeline"
import { StackOptions } from "@/lib/types/Timeline"
import { FunctionComponent } from "react"

type StackSectionProps = {
  stack: { technology: StackOptions; count: number }[]
}

const StackSection: FunctionComponent<StackSectionProps> = ({ stack }) => (
  <section className="">
    <h2 className="text-4xl font-bold">My Stack</h2>
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Center circle */}
      <div className="z-10 absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white m-[35px]">
        Center
      </div>
      {/* <div className="relative w-full h-full animate-spin-slow"> */}
      <div className="relative w-full h-full ">
        {/* Orbiting techs */}
        {stack.map((tech, index) => {
          const angle = (360 / stack.length) * index

          return (
            <div key={tech.technology}>
              <div
                className="absolute top-[43%] left-1/2 w-px bg-gray-400 mx-[35px]"
                style={{
                  height: "140px",
                  transform: `rotate(${angle - 17}deg) translateY(-50%)`,
                }}
              />
              <div
                className="hover:bg-gray-300 absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shadow-md"
                style={{
                  transform: `
                    rotate(${angle}deg) 
                    translate(180px) 
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="flex flex-col items-center">
                  {Object.hasOwn(TECH_STACK_ICONS, tech.technology) ? (
                    <>
                      {
                        TECH_STACK_ICONS[
                          tech.technology as keyof typeof TECH_STACK_ICONS
                        ]
                      }
                    </>
                  ) : (
                    <span className="text-xs text-red-500">?</span>
                  )}
                  <p className="text-center text-xs">{tech.technology}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default StackSection
