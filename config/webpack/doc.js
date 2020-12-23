
const path = require('path');
const images = require('remark-images');
const emoji = require('remark-emoji');

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./base');

module.exports = merge(base, {
  entry: path.join(process.cwd(), 'src/doc/index.tsx'),
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader', 
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [images, emoji]
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
});