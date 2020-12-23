
const path = require('path');

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./base');

module.exports = merge(base, {
  entry: path.join(process.cwd(), 'src/doc/index.tsx'),
  plugins: [new HtmlWebpackPlugin()]
});