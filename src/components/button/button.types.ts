import { HtmlElementProps } from "../../types"

export type Ref = HTMLButtonElement
export type Props = HtmlElementProps<HTMLButtonElement> & {
  unstyled?: boolean
  variant?:
  | "default"
  | "secondary"
  | "accentCool"
  | "accentWarm"
  | "base"
  | "outline"
  | "outlineInverse"
}
