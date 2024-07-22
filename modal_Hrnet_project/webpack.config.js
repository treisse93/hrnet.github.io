const path = require("path");

module.exports = {
  entry: "./src/Modal.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "Modal",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
