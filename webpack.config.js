'use strict';

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: APP_PATH
    }, {
      test: /\.(jpg|png|jpeg)$/,
      loader: 'url?limit=40000'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: APP_PATH,
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello world app'
    })
  ]
};
