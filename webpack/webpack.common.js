const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['./src/index.jsx', './public/example.ts'],
  resolve: {
    extensions: ['.ts','.js','.jsx']
  },
  module: {

    rules: [
      {
        test: /\.(js|ts|jsx)/,
        include: [path.resolve('src'), path.resolve('public')],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'ReactDOM-Render',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
