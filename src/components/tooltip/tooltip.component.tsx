import { forwardRef } from "react"
import { useForwardRef } from "../../hooks/useForwardRef"
import { buildClassName } from "../../utils"
import { useChildDimensions } from "./tooltip.hooks"
import { useStyles } from "./tooltip.styles"
import { Props, Ref } from "./tooltip.types"

export const Tooltip = forwardRef<Ref, Props>(
  (
    { text, position = "bottom", children, arrow = true, help=false, className: extraClassName, ...props },
    ref,
  ) => {
    const localRef = useForwardRef(ref)
    const dimensions = useChildDimensions(localRef)
    const styles = useStyles({ text, ...dimensions })
    const className = buildClassName(
      styles.tooltip,
      styles[position],
      arrow ? styles.arrow : undefined,
      help ? styles.help : undefined,
      extraClassName,
    )

    return (
      <div ref={localRef} className={className} {...props}>
        {children}
        <span role="tooltip" className={styles.text}>
          {text}
        </span>
      </div>
    )
  },
)
