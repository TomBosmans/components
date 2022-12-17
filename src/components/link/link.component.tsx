import { forwardRef } from "react"
import { buildClassName } from "../../utils"
import { useStyles } from "./link.styles"
import { Props, Ref } from "./link.types"

export const Link = forwardRef<Ref, Props>(
  ({ className: extraClassName, ...props }, ref) => {
    const styles = useStyles()
    const className = buildClassName(styles.link, extraClassName)

    return <a ref={ref} className={className} {...props} />
  },
)
