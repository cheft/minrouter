var webpack = require('webpack');

module.exports = {
  entry: './src/minrouter.js',
  output: {
    path: __dirname,
    filename: 'minrouter.min.js',
    libraryTarget: 'umd',
    library: 'Router'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-async-to-generator']
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
