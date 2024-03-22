const path = require('path')

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    watch: !env.production,
    target: 'node',
    entry: {
      server: './server/index.ts',
    },
    output: {
      filename: '[name]/bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
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
  }
}
