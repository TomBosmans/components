import { HtmlElementProps } from "../../types"

export type Props = HtmlElementProps<HTMLDivElement> & {
  text: string
  position?: "left" | "right" | "bottom" | "top"
  arrow?: boolean
  help?: boolean
}

export type Ref = {
  containerElement: HTMLDivElement | null
  tooltipElement: HTMLSpanElement | null

  /**
   * Always show the tooltip
   */
  show: () => void

  /**
   * Undo always show the tooltip
   */
  hide: () => void
}

export type StyleProps = { text: string } & Dimensions

export type Dimensions = {
  tooltip: {
    width: number
    heigth: number
  }
  target: {
    width: number
    heigth: number
  }
}
