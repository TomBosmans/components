import { Align, HeadingType, HtmlElementProps, Measure } from "../../types"

export type Props = HtmlElementProps<"h1"> & {
  type: HeadingType
  size: "xl" | "l" | "m" | "s"
  measure?: Measure
  align?: Align
}

export type Ref = HTMLHeadingElement
