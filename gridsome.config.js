// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Perry James",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PageType",
        path: "content/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "StackType",
        path: "content/stack/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "content/blog/**/*.md",
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
