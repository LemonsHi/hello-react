const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    client: './src/index.tsx',
  },
  output: {
    filename: '[name]/js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 以下配置会将没指定拓展名的文件按如下类型查找匹配
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/favicon.ico'),
          to: path.resolve(__dirname, '../dist/assets/favicon.ico'),
        },
        {
          from: path.resolve(__dirname, '../public/logo192.png'),
          to: path.resolve(__dirname, '../dist/assets/logo192.png'),
        },
        {
          from: path.resolve(__dirname, '../public/manifest.json'),
          to: path.resolve(__dirname, '../dist/assets/manifest.json'),
        },
      ],
    }),
  ],
}
