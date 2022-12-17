import { DetailedHTMLProps, HTMLAttributes } from "react"

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  size: "xl" | "l" | "m"
}

export type Ref = HTMLSpanElement
