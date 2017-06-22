var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/test/browser.js",
  output: {
    path: __dirname + "/test",
    filename: "browser.bundle.js"
  }
}