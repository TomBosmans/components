import { Props, Ref } from "./paragraph.types"
import { buildClassName } from "../../utils"
import { forwardRef } from "react"
import { useMeasureStyles } from "../../styles"
import { useStyles } from "./paragraph.styles"
import { useTextAlignStyles } from "../../styles/text-align.styles"

export const Paragraph = forwardRef<Ref, Props>(
  ({ align = "left", className: extraClassName, measure = 2, size = "m", ...props }, ref) => {
    const styles = useStyles()
    const measureStyles = useMeasureStyles()
    const textAlignStyles = useTextAlignStyles()
    const className = buildClassName(
      styles.paragraph,
      styles[size],
      measureStyles[measure],
      textAlignStyles[align],
      extraClassName,
    )

    return <p ref={ref} {...props} className={className} />
  },
)
