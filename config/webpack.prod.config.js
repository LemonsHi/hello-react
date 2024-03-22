const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common.config.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
      PUBLIC_URL: 'assets',
      minify: {
        removeComments: true,
      },
    }),
  ],
})
