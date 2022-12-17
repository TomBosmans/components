import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  default: {
    appearance: "none",
    backgroundColor: "#005ea2",
    border: 0,
    borderRadius: ".25rem",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
    fontSize: "1.06rem",
    fontWeight: 700,
    lineHeight: ".9",
    marginRight: ".5rem",
    padding: ".75rem 1.25rem",
    textAlign: "center",
    textDecoration: "none",
    width: "100%",

    "&:focus": {
      outline: ".25rem solid #2491ff",
    },

    "&:not([disabled]):focus": {
      outlineOffset: ".25rem",
    },

    "&:hover": {
      backgroundColor: "#1a4480",
      borderBottom: 0,
      color: "#fff",
      textDecoration: "none",
    },

    "&:active": {
      backgroundColor: "#162e51",
      color: "#fff",
    },

    "&:disabled": {
      backgroundColor: "#c9c9c9",
      color: "#fff",
      cursor: "auto",
    },

    "@media screen and (min-width: 30em)": {
      width: "auto",
    },
  },

  unstyled: {
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    color: "#005ea2",
    fontWeight: 400,
    margin: 0,
    padding: 0,
    textAlign: "left",
    textDecoration: "underline",

    "&:hover": {
      color: "#005ea2",
      backgroundColor: "transparent",
      textDecoration: "underline",
    },

    "&:active": {
      color: "#162e51",
    },
  },

  secondary: {
    color: "#fff",
    backgroundColor: "#d83933",

    "&:active": {
      color: "#fff",
      backgroundColor: "#8b0a03",
    },

    "&:hover": {
      color: "#fff",
      backgroundColor: "#b50909",
    },
  },

  accentCool: {
    color: "#1b1b1b",
    backgroundColor: "#00bde3",

    "&:active": {
      color: "#fff",
      backgroundColor: "#07648d",
    },

    "&:hover": {
      color: "#1b1b1b",
      backgroundColor: "#28a0cb",
    },
  },

  accentWarm: {
    color: "#1b1b1b",
    backgroundColor: "#fa9441",

    "&:active": {
      color: "#fff",
      backgroundColor: "#775540",
    },

    "&:hover": {
      color: "#fff",
      backgroundColor: "#c05600",
    },
  },

  base: {
    color: "#fff",
    backgroundColor: "#757575",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#5c5c5c",
    },

    "&:active": {
      color: "#fff",
      backgroundColor: "#2e2e2e",
    },
  },

  outline: {
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 2px #005ea2",
    color: "#005ea2",

    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px #1a4480",
      color: "#1a4480",
    },

    "&:active": {
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px #162e51",
      color: "#162e51",
    },
  },

  outlineInverse: {
    boxShadow: "inset 0 0 0 2px #e6e6e6",
    color: "#e6e6e6",

    "&:active": {
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px #fff",
      color: "#fff",
    },

    "&:hover": {
      boxShadow: "inset 0 0 0 2px #f0f0f0",
      color: "#f0f0f0",
    },
  },
})
