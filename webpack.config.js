const path = require("path");

module.exports = {
 entry: "./public/search.js",
 output: {
  path: path.resolve(__dirname, "public"),
  filename: "bundle.js"
 },
 module: {
  loaders: [
   { test: /\.js$/, loader: "babel-loader", exclude: "/node_modules/" }
  ]
 }
}