import { Button } from "./button.component"
import { Props } from "./button.types"

export default {
  title: "Button",
  component: Button,
}

const variants = [
  "default",
  "secondary",
  "accentCool",
  "accentWarm",
  "base",
  "outline",
  "outlineInverse",
] as Array<Props["variant"]>

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    {variants.map((variant) => (
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant={variant} id="default">
          default
        </Button>
        <Button variant={variant} id="hover">
          Hover
        </Button>
        <Button variant={variant} id="active">
          Active
        </Button>
        <Button variant={variant} id="focus">
          Focus
        </Button>
        <Button variant={variant} disabled>
          Disabled
        </Button>
        <Button variant={variant} unstyled id="unstyled">
          Unstyled button
        </Button>
      </div>
    ))}
  </div>
)

Default.parameters = {
  pseudo: {
    active: "#active",
    focus: "#focus",
    hover: "#hover",
  },
}
