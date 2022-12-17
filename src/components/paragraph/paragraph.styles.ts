import theme from "../../theme"
import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  paragraph: {
    color: "#0b0c0c",
    display: "block",
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    marginTop: 0,
  },

  l: {
    fontSize: theme.fontSize.small[24],
    lineHeight: theme.lineHeight.small[24],
    marginBottom: "20px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[24],
      lineHeight: theme.lineHeight[24],
      marginBottom: "30px",
    },
  },

  m: {
    fontSize: theme.fontSize.small[19],
    lineHeight: theme.lineHeight.small[19],
    marginBottom: "15px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[19],
      lineHeight: theme.lineHeight[19],
      marginBottom: "20px",
    },
  },

  s: {
    fontSize: theme.fontSize.small[16],
    lineHeight: theme.lineHeight.small[16],
    marginBottom: "15px",

    [theme.breakpoint.large]: {
      fontSize: theme.fontSize[16],
      lineHeight: theme.lineHeight[16],
      marginBottom: "20px",
    },
  },
})
