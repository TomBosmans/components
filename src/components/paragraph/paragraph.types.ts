import { DetailedHTMLProps, HTMLAttributes } from "react"
import { Align, Measure } from "../../types"

export type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: "l" | "m" | "s"
  measure?: Measure
  align?: Align
}

export type Ref = HTMLParagraphElement
