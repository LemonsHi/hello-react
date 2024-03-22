const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: { directory: path.join(__dirname, '../dist') },
    port: 3000,
    hot: true,
    historyApiFallback: { index: '/', disableDotRule: true },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
      PUBLIC_URL: 'assets',
    }),
  ],
})
