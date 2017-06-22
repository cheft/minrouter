var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/demo/browser.js",
  output: {
    path: __dirname + "/demo",
    filename: "browser.bundle.js"
  }
}