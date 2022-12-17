import { DetailedHTMLProps, HTMLAttributes } from "react"

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  text: string
  position?: "left" | "right" | "bottom" | "top"
  arrow?: boolean
  help?: boolean
}

export type Ref = HTMLDivElement

export type StyleProps = { text: string } & Dimensions

export type Dimensions = {
  tooltip: {
    width: number,
    heigth: number
  },
  target: {
    width: number,
    heigth: number
  }
}
