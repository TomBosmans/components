import { Caption } from "./caption.component"

export default {
  title: "Caption",
  component: Caption,
}

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Caption size="xl">caption-xl</Caption>
    <Caption size="l">caption-l</Caption>
    <Caption size="m">caption-m</Caption>
  </div>
)
