// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/app.ts',  // 入口文件
  module: {
    rules: [
      {
        test: /\.ts$/,      // 使用 ts-loader 处理 .ts 文件
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],  // 允许解析 .ts 和 .js 文件
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // 输出目录
  },
  mode: 'development',
};