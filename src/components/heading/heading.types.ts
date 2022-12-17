import { DetailedHTMLProps, HTMLAttributes } from "react"
import { Align, HeadingType, Measure } from "../../types"

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  type: HeadingType
  size: "xl" | "l" | "m" | "s"
  measure?: Measure
  align?: Align
}

export type Ref = HTMLHeadingElement
