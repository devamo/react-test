module.exports = {
  entry: "./src/index.js",
  mode: "production",
  // devtool: "cheap-module-eval-source-map",

  output: {
    libraryExport: "default",
    libraryTarget: "umd",
    library: "[name]",
    filename: `bundle.js`,
  },
};
