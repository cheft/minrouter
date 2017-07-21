var webpack = require('webpack');

module.exports = {
  entry: {
    'basic/browser':['babel-polyfill', __dirname + '/demo/basic/browser.js'],
    'preact/client': ['babel-polyfill', __dirname + '/demo/preact/client.js']
    
  },
  output: {
    path: __dirname + '/demo',
    filename: "[name].bundle.js"
  },

  module: {
    rules: [ {
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
}