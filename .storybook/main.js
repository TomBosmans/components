module.exports = {
  stories: ["../src/**/*.docs.mdx", "../src/**/*.docs.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true,
  },
}
