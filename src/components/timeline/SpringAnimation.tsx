import { MotionArticle } from "@/components/motion/MotionArticle"
import { MotionDiv } from "@/components/motion/MotionDiv"
import { FunctionComponent, ReactNode } from "react"

type TimeLineItemProps = {
  children: ReactNode
}

const SpringAnimation: FunctionComponent<TimeLineItemProps> = ({
  children,
}) => (
  <MotionArticle
    layout
    className={`relative  mb-6`}
    transition={{ layout: { type: "spring", stiffness: 400, damping: 40 } }}
  >
    <MotionDiv layout>{children}</MotionDiv>
  </MotionArticle>
)

export default SpringAnimation
