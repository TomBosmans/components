import theme from "../theme"
import { createUseStyles } from "react-jss"

export const useFontSizeStyles = createUseStyles({
  14: {
    fontSize: theme.fontSize.small[14],
    lineHeight: theme.lineHeight.small[14],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[14],
      lineHeight: theme.lineHeight[14],
    },
  },

  16: {
    fontSize: theme.fontSize.small[16],
    lineHeight: theme.lineHeight.small[16],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[16],
      lineHeight: theme.lineHeight[16],
    },
  },

  19: {
    fontSize: theme.fontSize.small[19],
    lineHeight: theme.lineHeight.small[19],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[19],
      lineHeight: theme.lineHeight[19],
    },
  },

  24: {
    fontSize: theme.fontSize.small[24],
    lineHeight: theme.lineHeight.small[24],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[24],
      lineHeight: theme.lineHeight[24],
    },
  },

  27: {
    fontSize: theme.fontSize.small[27],
    lineHeight: theme.lineHeight.small[27],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[27],
      lineHeight: theme.lineHeight[27],
    },
  },

  36: {
    fontSize: theme.fontSize.small[36],
    lineHeight: theme.lineHeight.small[36],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[36],
      lineHeight: theme.lineHeight[36],
    },
  },

  48: {
    fontSize: theme.fontSize.small[48],
    lineHeight: theme.lineHeight.small[48],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[48],
      lineHeight: theme.lineHeight[48],
    },
  },

  80: {
    fontSize: theme.fontSize.small[80],
    lineHeight: theme.lineHeight.small[80],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[80],
      lineHeight: theme.lineHeight[80],
    },
  },
})
