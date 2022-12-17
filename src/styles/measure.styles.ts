import theme from "../theme"
import { createUseStyles } from "react-jss"

export const useMeasureStyles = createUseStyles({
  1: { maxWidth: theme.measure[1] },
  2: { maxWidth: theme.measure[2] },
  3: { maxWidth: theme.measure[3] },
  4: { maxWidth: theme.measure[4] },
  5: { maxWidth: theme.measure[5] },
  6: { maxWidth: theme.measure[6] },
  none: {},
})
