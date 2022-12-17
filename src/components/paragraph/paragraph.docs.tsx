import { Paragraph } from "./paragraph.component"

export default {
  title: "Paragraph",
  component: Paragraph,
}

const text =
  "You never see a frog so modest and straightforward as he was, for all he was so gifted. And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see. Jumping on a dead level was his strong suit, you understand; and when it come to that, Smiley would ante up money on him as long as he had a red. Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see."

export const Default = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Paragraph size="l">paragraph-l</Paragraph>
      <Paragraph size="m">paragraph-m</Paragraph>
      <Paragraph size="s">paragraph-s</Paragraph>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Paragraph size="m" measure="none" align="left">align-left</Paragraph>
      <Paragraph size="m" measure="none" align="center">align-center</Paragraph>
      <Paragraph size="m" measure="none" align="right">align-right</Paragraph>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Paragraph size="m" measure="1">{text}</Paragraph>
      <Paragraph size="m" measure="2">{text}</Paragraph>
      <Paragraph size="m" measure="3">{text}</Paragraph>
      <Paragraph size="m" measure="4">{text}</Paragraph>
      <Paragraph size="m" measure="5">{text}</Paragraph>
      <Paragraph size="m" measure="6">{text}</Paragraph>
      <Paragraph size="m" measure="none">{text}</Paragraph>
    </div>
  </div>
)
