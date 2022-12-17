import { useRef } from "react"
import { Button } from "../button"
import { Paragraph } from "../paragraph"
import { Tooltip } from "./tooltip.component"
import { Ref } from "./tooltip.types"

export default {
  title: "Tooltip",
  component: Tooltip,
}

const RefExample = () => {
  const ref = useRef<Ref>(null)

  const handleShow = () => ref.current?.show()
  const handleHide = () => ref.current?.hide()

  return (
    <Tooltip ref={ref} text="tooltip" position="left">
      <Paragraph measure="none">hello world</Paragraph>
      <Button onClick={handleShow}>show</Button>
      <Button onClick={handleHide}>hide</Button>
    </Tooltip>
  )
}

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <RefExample />
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
        paddingLeft: "10rem",
        paddingTop: "5rem",
      }}
    >
      <Tooltip text="tooltip" position="left">
        <Paragraph>left</Paragraph>
      </Tooltip>

      <Tooltip text="tooltip" position="bottom">
        <Paragraph>bottom</Paragraph>
      </Tooltip>

      <Tooltip text="tooltip" position="top">
        <Paragraph>top</Paragraph>
      </Tooltip>

      <Tooltip text="tooltip" position="right">
        <Paragraph>right</Paragraph>
      </Tooltip>
    </div>

    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <Tooltip help text="tooltip" position="left">
        <Paragraph>left</Paragraph>
      </Tooltip>

      <Tooltip help text="tooltip" position="bottom">
        <Paragraph>bottom</Paragraph>
      </Tooltip>

      <Tooltip help text="tooltip" position="top">
        <Paragraph>top</Paragraph>
      </Tooltip>

      <Tooltip help text="tooltip" position="right">
        <Paragraph>right</Paragraph>
      </Tooltip>
    </div>

    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <Tooltip className="hover" text="tooltip" position="left">
        <Paragraph>left</Paragraph>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="bottom">
        <Paragraph>bottom</Paragraph>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="top">
        <Paragraph>top</Paragraph>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="right">
        <Paragraph>right</Paragraph>
      </Tooltip>
    </div>

    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <Tooltip arrow={false} className="hover" text="tooltip" position="left">
        <Paragraph>left</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="bottom">
        <Paragraph>bottom</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="top">
        <Paragraph>top</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="right">
        <Paragraph>right</Paragraph>
      </Tooltip>
    </div>
    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <Tooltip arrow={false} className="hover" text="tooltip" position="left">
        <Paragraph>left</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="bottom">
        <Paragraph>bottom</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="top">
        <Paragraph>top</Paragraph>
      </Tooltip>

      <Tooltip arrow={false} className="hover" text="tooltip" position="right">
        <Paragraph>right</Paragraph>
      </Tooltip>
    </div>

    <div style={{ display: "flex", flexDirection: "row", gap: "5rem", paddingLeft: "10rem" }}>
      <Tooltip className="hover" text="tooltip" position="left">
        <Button>left</Button>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="bottom">
        <Button>bottom</Button>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="top">
        <Button>top</Button>
      </Tooltip>

      <Tooltip className="hover" text="tooltip" position="right">
        <Button>right</Button>
      </Tooltip>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
        paddingLeft: "15rem",
        paddingBottom: "15rem",
      }}
    >
      <Tooltip arrow className="hover" text="this is a longer tooltip." position="left">
        <Paragraph>Longer tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="this is a longer tooltip." position="bottom">
        <Paragraph>Longer tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="this is a longer tooltip." position="top">
        <Paragraph>Longer tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="this is a longer tooltip." position="right">
        <Paragraph>Longer tooltip.</Paragraph>
      </Tooltip>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
        paddingLeft: "15rem",
        paddingBottom: "15rem",
      }}
    >
      <Tooltip arrow className="hover" text="short" position="left">
        <Paragraph>Long text with short tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="short" position="bottom">
        <Paragraph>Long text with short tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="short" position="top">
        <Paragraph>Long text with short tooltip.</Paragraph>
      </Tooltip>

      <Tooltip arrow className="hover" text="short" position="right">
        <Paragraph>Long text with short tooltip.</Paragraph>
      </Tooltip>
    </div>
  </div>
)
