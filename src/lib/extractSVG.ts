/* eslint-disable  */
import { JSX } from "react"
type ExtractSVGType = (iconElement: JSX.Element | null) => JSX.Element

const extractSVG: ExtractSVGType = (iconElement) => {
  if (iconElement === null) {
    return null
  }

  const rendered = iconElement.type({})

  return rendered.props.children
}

export default extractSVG
