const FONTS = {
  georgia: "Georgia,Cambria,Times New Roman,Times,serif",
  helvetica: "Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
  merriweather: "Merriweather Web,Georgia,Cambria,Times New Roman,Times,serif",
  openSans: "Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  publicSans: "Public Sans Web,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  robotoMono: "Roboto Mono Web,Roboto Mono Web,Bitstream Vera Sans Mono,Consolas,Courier,monospace",
  sourceSandPro: "Source Sans Pro,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
  system: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  tahoma: "Tahoma,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  verdana: "Verdana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
}

const TYPE_FONTS = {
  cond: null,
  icon: null,
  lang: null,
  mono: FONTS.robotoMono,
  sans: FONTS.sourceSandPro,
  serif: FONTS.merriweather,
}

const fontFamily = {
  alt: TYPE_FONTS.serif,
  body: TYPE_FONTS.sans,
  code: TYPE_FONTS.mono,
  heading: TYPE_FONTS.serif,
  ui: TYPE_FONTS.sans,
}

export default fontFamily
