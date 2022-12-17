import { Heading } from "../heading"
import { Link } from "./link.component"
import { Paragraph } from "../paragraph"

export default {
  title: "Link",
  component: Link,
}

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <Link href="javascript:void(0)">Default</Link>
      <Link className="hover" href="javascript:void(0)">
        Hover
      </Link>
      <Link className="focus" href="javascript:void(0)">
        Focus
      </Link>
      <Link className="active" href="javascript:void(0)">
        Active
      </Link>
      <Link className="visited" href="javascript:void(0)">
        Visited
      </Link>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Paragraph size="s">
        This is a <Link href="javascript:void(0)">link</Link>.
      </Paragraph>
      <Paragraph>
        This is a <Link href="javascript:void(0)">link</Link>.
      </Paragraph>
      <Paragraph size="l">
        This is a <Link href="javascript:void(0)">link</Link>.
      </Paragraph>
      <Heading type="h1" size="m">
        This is a <Link href="javascript:void(0)">link</Link>.
      </Heading>
    </div>
  </div>
)
