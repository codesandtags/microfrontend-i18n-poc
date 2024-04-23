const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codes",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object

    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      compress: true,
      port: 3001, // Specify your development port here
    },
  });
};
