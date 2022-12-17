export function getTextWidth(
  text: string,
  font?: { family: string; weigth: number; size: string },
) {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  if (!context) return 0

  context.font = font
    ? `${font.weigth} ${font.size} ${font.family}`
    : getComputedStyle(document.body).font

  return Math.ceil(context.measureText(text).width)
}
