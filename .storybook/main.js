module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/html",
    // Adds Storybook Composition https://storybook.js.org/docs/react/sharing/storybook-composition
    "refs": {
      'design-system': {
        "title": "USWDS Design System (React)",
        "url": "https://trussworks.github.io/react-uswds/",
        "expanded": false // optional, true by default
      }
    },
    // Adds Storybook Composition https://storybook.js.org/docs/react/sharing/storybook-composition
    // "refs": {
    //   'design-system': {
    //     "title": "React USWDS Design System",
    //     "url": "",
    //     "expanded": false // optional, true by default
    //   }
    // },
    // webpackFinal: (config) => {
    //   config.module.rules = config.module.rules.concat([
    //     {
    //       test: /\.scss$/,
    //       // Webpack 5:
    //       // type: 'asset/source',
    //       // Webpack 4 (make sure to also install the raw-loader package):
    //       use: 'raw-loader',
    //     },
    //   ]);
    //   return config;
    // }
};
