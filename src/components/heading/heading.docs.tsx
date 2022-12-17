import { useFontSizeStyles } from "../../styles"
import { useFontFamilyStyles } from "../../styles/font-family.styles"
import { buildClassName } from "../../utils"
import { Caption } from "../caption"
import { Paragraph } from "../paragraph"
import { Heading } from "./heading.component"

export default {
  title: "Heading",
  component: Heading,
}

const Test = () => {
  const fontFamilyStyles = useFontFamilyStyles()
  const fontSizeStyles= useFontSizeStyles()

  const className = buildClassName(
    fontFamilyStyles.body,
    fontSizeStyles[16]
  )

  return (
    <Heading type="h1" size="m" className={className}>
      Hello world
    </Heading>
  )
}

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
    <Test/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading type="h1" size="l">
        heading-l
      </Heading>
      <Heading type="h2" size="m">
        heading-m
      </Heading>
      <Heading type="h3" size="s">
        heading-s
      </Heading>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading type="h1" size="xl">
        heading-xl
      </Heading>
      <Heading type="h2" size="l">
        heading-l
      </Heading>
      <Heading type="h3" size="m">
        heading-m
      </Heading>
      <Heading type="h4" size="s">
        heading-s
      </Heading>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading align="left" type="h1" size="m">
        heading-left
      </Heading>
      <Heading align="center" type="h1" size="m">
        heading-center
      </Heading>
      <Heading align="right" type="h1" size="m">
        heading-right
      </Heading>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Caption size="xl">caption-xl</Caption>
      <Heading type="h1" size="xl">
        heading-xl
      </Heading>
      <Caption size="l">caption-l</Caption>
      <Heading type="h2" size="l">
        heading-l
      </Heading>
      <Caption size="m">caption-m</Caption>
      <Heading type="h3" size="m">
        heading-m
      </Heading>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading type="h1" size="xl">
        <Caption size="xl">caption-xl</Caption>
        heading-xl
      </Heading>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Heading type="h1" size="m" measure="1">
        This is a very long title that will be cut off, because it is too long
      </Heading>
      <Paragraph size="m" measure="2">
        You never see a frog so modest and straightforward as he was, for all he was so gifted. And
        when it come to fair and square jumping on a dead level, he could get over more ground at
        one straddle than any animal of his breed you ever see. Jumping on a dead level was his
        strong suit, you understand; and when it come to that, Smiley would ante up money on him as
        long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for
        fellers that had traveled and been everywheres, all said he laid over any frog that ever
        they see.
      </Paragraph>
    </div>
  </div>
)
