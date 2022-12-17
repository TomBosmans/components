import { RefObject, useLayoutEffect, useState } from "react"
import { Dimensions } from "./tooltip.types"

export const useChildDimensions = (ref: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    tooltip: {
      width: 0,
      heigth: 0,
    },
    target: {
      width: 0,
      heigth: 0,
    },
  })

  useLayoutEffect(() => {
    if (ref.current) {
      const firstChild = ref.current.firstElementChild
      if (!firstChild) return

      const lastChild = ref.current.lastElementChild
      if (!lastChild) return

      setDimensions({
        tooltip: {
          width: lastChild.clientWidth,
          heigth: lastChild.clientHeight
        },
        target: {
          width: firstChild.clientWidth,
          heigth: firstChild.clientHeight,
        },
      })
    }
  }, [])

  return dimensions
}
