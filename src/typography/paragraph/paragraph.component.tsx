import { forwardRef } from "react"
import { useStyles } from "./paragraph.styles"
import { Props, Ref } from "./paragraph.types"

export const Paragraph = forwardRef<Ref>((props: Props, ref) => {
  const styles = useStyles()

  return <p ref={ref} className={styles.p} {...props} />
})

Paragraph.displayName = "Paragraph"
