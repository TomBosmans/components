import { Props, Ref } from "./caption.types"
import { buildClassName } from "../../utils"
import { forwardRef } from "react"
import { useStyles } from "./caption.styles"

export const Caption = forwardRef<Ref, Props>(
  ({ size, className: extraClassName, ...props }, ref) => {
    const styles = useStyles()
    const className = buildClassName(styles.caption, styles[size], extraClassName)

    return <span ref={ref} className={className} {...props} />
  },
)
