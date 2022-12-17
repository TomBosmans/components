import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
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

export type Ref = HTMLButtonElement
