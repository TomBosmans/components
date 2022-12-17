import theme from "../../theme"
import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  heading: {
    color: "#0b0c0c",
    display: "block",
    fontFamily: theme.fontFamily.heading,
    fontWeight: theme.fontWeight.bold,
    marginTop: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },

  xl: {
    fontSize: theme.fontSize.small[48],
    lineHeight: theme.lineHeight.small[48],
    marginBottom: "30px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[48],
      lineHeight: theme.lineHeight[48],
      marginBottom: "50px",
    },
  },

  l: {
    fontSize: theme.fontSize.small[36],
    lineHeight: theme.lineHeight.small[36],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[36],
      lineHeight: theme.lineHeight[36],
      marginBottom: "30px",
    },
  },

  m: {
    fontSize: theme.fontSize.small[24],
    lineHeight: theme.lineHeight.small[24],
    marginBottom: "15px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[24],
      lineHeight: theme.lineHeight[24],
      marginBottom: "20px",
    },
  },

  s: {
    fontSize: theme.fontSize.small[19],
    lineHeight: theme.lineHeight.small[19],
    marginBottom: "15px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[19],
      lineHeight: theme.lineHeight[19],
      marginBottom: "20px",
    },
  },
})
