import { forwardRef } from "react"
import { useStyles } from "./button.styles"
import { Props, Ref } from "./button.types"

export const Button = forwardRef<Ref>((props: Props, ref) => {
  const styles = useStyles()

  return <button ref={ref} className={styles.button} {...props} />
})

Button.displayName = "Button"
