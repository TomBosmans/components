import { createUseStyles } from "react-jss"
import theme from "../../theme"

export const useStyles = createUseStyles({
  link: {
    backgroundColor: "transparent",
    color: "#005ea2",
    fontSize: "inherit",
    fontWeight: theme.fontWeight.normal,
    lineHeight: "inherit",
    textDecoration: "underline",

    "&:hover, &.hover": {
      color: "#1a4480",
    },

    "&:active, &.active": {
      color: "#162e51",
    },

    "&:focus, &.focus": {
      outline: ".25rem solid #2491ff",
      outlineOffset: 0,
    },

    "&:visited, &.visited": {
      color: "#54278f",
    },
  },
})
