import { HtmlElementProps } from "../../types"

export type Ref = HTMLSpanElement
export type Props = HtmlElementProps<HTMLSpanElement> & {
  size: "xl" | "l" | "m"
}
