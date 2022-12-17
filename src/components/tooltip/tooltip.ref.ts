import { ForwardedRef, RefObject, useImperativeHandle } from "react"
import { Ref } from "./tooltip.types"

export const useCreateRef = (
  ref: ForwardedRef<Ref>,
  containerRef: RefObject<HTMLDivElement>,
  tooltipRef: RefObject<HTMLSpanElement>,
) => {
  useImperativeHandle(
    ref,
    () => ({
      containerElement: containerRef.current,
      tooltipElement: tooltipRef.current,

      show() {
        if (!containerRef.current) return
        if (containerRef.current.className.includes("hover")) return
        containerRef.current.className += " hover"
      },

      hide() {
        if (!containerRef.current) return
        containerRef.current.className = containerRef.current.className.replace(" hover", "")
      },
    }),
    [],
  )
}
