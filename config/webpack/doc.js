
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const images = require('remark-images');
const emoji = require('remark-emoji');
const playground = require('./remark-playground');

const base = require('./base');

module.exports = merge(base, {
  entry: path.join(process.cwd(), 'src/doc/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mdx'],
    alias: {
      '@doc/components': path.resolve(process.cwd(), 'src/doc/app/Components')
    },
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader', 
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [
                images, 
                emoji,
                playground
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
});