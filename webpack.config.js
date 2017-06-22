var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/src/minrouter.js",
  output: {
    path: __dirname,
    filename: "minrouter.min.js",
    libraryTarget: 'umd',
    library: 'Router'
  }
}