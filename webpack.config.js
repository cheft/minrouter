var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', __dirname + '/src/minrouter.js'],
  output: {
    path: __dirname,
    filename: 'minrouter.min.js',
    libraryTarget: 'umd',
    library: 'Router'
  }
}
