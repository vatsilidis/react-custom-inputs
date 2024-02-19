// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule for .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader for transpiling
          options: {
            presets: ["@babel/preset-env"], // Use @babel/preset-env for ES6+ support
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/, // Apply rule for .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
};
