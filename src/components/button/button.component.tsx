import { Props, Ref } from "./button.types"
import { forwardRef } from "react"
import { useStyles } from "./button.styles"
import { buildClassName } from "../../utils"

export const Button = forwardRef<Ref, Props>(
  ({ unstyled = false, variant = "default", className: extraClassName, ...props }, ref) => {
    const styles = useStyles()
    const className = buildClassName(
      styles.default,
      variant !== "default" ? styles[variant] : undefined,
      unstyled ? styles.unstyled : undefined,
      extraClassName,
    )

    return <button ref={ref} className={className} {...props} />
  },
)
