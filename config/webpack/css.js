
const path = require('path');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  entry: path.join(process.cwd(), 'src/components/Styles/index.ts'),
  output: {
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});