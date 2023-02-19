const path = require('path');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ template: './public/index.html' }),
    new WindiCSSWebpackPlugin()
  ],
};
