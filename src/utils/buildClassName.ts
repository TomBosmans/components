export function buildClassName(...styles: Array<string | undefined>) {
  return styles.filter(v => v).join(" ")
}
