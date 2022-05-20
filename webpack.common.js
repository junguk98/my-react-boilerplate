const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/i,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 100 * 1024,
      //     },
      //   },
      // },
    ],
  },
};
