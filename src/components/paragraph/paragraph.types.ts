import { Align, HtmlElementProps, Measure } from "../../types"

export type Ref = HTMLParagraphElement
export type Props = HtmlElementProps<HTMLParagraphElement> & {
  size?: "l" | "m" | "s"
  measure?: Measure
  align?: Align
}
