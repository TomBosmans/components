import { createUseStyles } from "react-jss"
import theme from "../theme"

export const useFontFamilyStyles = createUseStyles({
  alt: { fontFamily: theme.fontFamily.alt },
  body: { fontFamily: theme.fontFamily.body },
  code: { fontFamily: theme.fontFamily.code },
  heading: { fontFamily: theme.fontFamily.heading },
  ui: { fontFamily: theme.fontFamily.ui }
})
