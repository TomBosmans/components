import theme from "../../theme"
import { StyleProps } from "./tooltip.types"
import { centerHorizontal, centerVertical, textWidth } from "./tooltip.utils"
import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles(() => {
  return {
    tooltip: {
      display: "inline-block",
      position: "relative",

      "&:hover $text, &.hover $text": {
        visibility: "visible",
      },
    },

    right: {
      "& $text": {
        left: (props: StyleProps) => `${props.target.width + 20}px`,
        top: centerVertical,
      },
    },

    left: {
      "& $text": {
        right: (props: StyleProps) => `${props.target.width + 20}px`,
        top: centerVertical,
      },
    },

    top: {
      "& $text": {
        top: (props: StyleProps) => `-${props.target.heigth + 20}px`,
        left: centerHorizontal,
      },
    },

    bottom: {
      "& $text": {
        top: (props: StyleProps) => `${props.target.heigth + 20}px`,
        left: centerHorizontal,
      },
    },

    text: {
      fontFamily: theme.fontFamily.body,
      lineHeight: theme.lineHeight[16],
      fontSize: theme.fontSize[16],
      whiteSpace: "pre",
      backgroundColor: "#1b1b1b",
      borderRadius: "6px",
      color: "#f0f0f0",
      padding: "5px 0px",
      position: "absolute",
      textAlign: "center",
      visibility: "hidden",
      width: textWidth,

      zIndex: 1,

      "&:hover $text, &.hover $text": {
        visibility: "visible",
      },
    },

    help: {
      textDecoration: "underline dotted",
      textUnderlineOffset: "5px",
      cursor: "help",
    },

    arrow: {
      "& $text::after": {
        borderStyle: "solid",
        borderWidth: "5px",
        content: "''",
        position: "absolute",
      },

      "&$right $text::after": {
        borderColor: "transparent #1b1b1b transparent transparent",
        marginTop: "-5px",
        right: "100%",
        top: "50%",
      },

      "&$left $text::after": {
        borderColor: "transparent transparent transparent #1b1b1b",
        left: "100%",
        marginTop: "-5px",
        top: "50%",
      },

      "&$bottom $text::after": {
        borderColor: "transparent transparent #1b1b1b transparent",
        bottom: "100%",
        left: "50%",
        marginLeft: "-5px",
      },

      "&$top $text::after": {
        borderColor: "#1b1b1b transparent transparent transparent",
        left: "50%",
        marginLeft: "-5px",
        top: "100%",
      },
    },
  }
})
