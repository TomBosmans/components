import { forwardRef } from "react"
import { useMeasureStyles } from "../../styles"
import { useTextAlignStyles } from "../../styles/text-align.styles"
import { buildClassName } from "../../utils"
import { useStyles } from "./heading.styles"
import { Props, Ref } from "./heading.types"

export const Heading = forwardRef<Ref, Props>(
  (
    {
      type: HeadingType,
      size,
      align = "left",
      className: extraClassName,
      measure = "none",
      ...props
    },
    ref,
  ) => {
    const styles = useStyles()
    const measureStyles = useMeasureStyles()
    const textAlignStyles = useTextAlignStyles()
    const className = buildClassName(
      styles.heading,
      styles[size],
      measureStyles[measure],
      textAlignStyles[align],
      extraClassName,
    )

    return <HeadingType className={className} ref={ref} {...props} />
  },
)
