const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codes",
    projectName: "dashboard",
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
      port: 3003, // Specify your development port here
    },
  });
};
