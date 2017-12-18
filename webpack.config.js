const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./src/build/bundle.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["es2015"]
        }
      },
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loaders: "url-loader" }
    ]
  },
  devtool: "source-map"
};
