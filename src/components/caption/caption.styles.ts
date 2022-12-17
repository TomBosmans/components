import theme from "../../theme"
import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  caption: {
    color: "#505a5f",
    display: "block",
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    marginBottom: "5px",
  },

  xl: {
    fontSize: theme.fontSize.small[27],
    lineHeight: theme.lineHeight.small[27],

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[27],
      lineHeight: theme.lineHeight[27],
    },
  },

  l: {
    fontSize: theme.fontSize.small[24],
    lineHeight: theme.lineHeight.small[24],

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[24],
      lineHeight: theme.lineHeight[24],
    },
  },

  m: {
    fontSize: theme.fontSize.small[19],
    lineHeight: theme.lineHeight.small[19],

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[19],
      lineHeight: theme.lineHeight[19],
    },
  },
})
