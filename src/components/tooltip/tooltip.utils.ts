import theme from "../../theme"
import { StyleProps } from "./tooltip.types"
import { getTextWidth } from "../../utils/getTextWidth"

export const textWidth = (props: StyleProps) =>
  `${
    getTextWidth(props.text, {
      family: theme.fontFamily.body,
      size: theme.fontSize[16],
      weigth: theme.fontWeight.normal,
    }) + 40
  }px`

export const centerHorizontal = (props: StyleProps) => {
  if (props.tooltip.width > props.target.width) {
    return `-${(props.tooltip.width - props.target.width) / 2}px`
  }

  return `${(props.target.width - props.tooltip.width) / 2}px`
}

export const centerVertical = (props: StyleProps) => {
  if (props.tooltip.heigth > props.target.width) {
    return `-${(props.tooltip.heigth - props.target.heigth) / 2}px`
  }

  return `${(props.target.heigth - props.tooltip.heigth) / 2}px`
}
