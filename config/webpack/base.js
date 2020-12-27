const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [{
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        include: [path.resolve(process.cwd(), 'src')],
        exclude: [/node_modules/]
      },
      {
        test: /.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    },
  },
}