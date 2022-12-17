import { Props, Ref } from "./tooltip.types"
import { buildClassName } from "../../utils"
import { forwardRef, useRef } from "react"
import { useChildDimensions } from "./tooltip.hooks"
import { useCreateRef } from "./tooltip.ref"
import { useStyles } from "./tooltip.styles"

export const Tooltip = forwardRef<Ref, Props>(
  (
    {
      text,
      position = "bottom",
      children,
      arrow = true,
      help = false,
      className: extraClassName,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLSpanElement>(null)
    const dimensions = useChildDimensions(containerRef)
    const styles = useStyles({ text, ...dimensions })
    useCreateRef(ref, containerRef, tooltipRef)

    const className = buildClassName(
      styles.tooltip,
      styles[position],
      arrow ? styles.arrow : undefined,
      help ? styles.help : undefined,
      extraClassName,
    )

    return (
      <div ref={containerRef} className={className} {...props}>
        {children}
        <span ref={tooltipRef} role="tooltip" className={styles.text}>
          {text}
        </span>
      </div>
    )
  },
)
