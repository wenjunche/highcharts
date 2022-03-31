const path = require('path');

const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlwebpackPlugin({
        title: 'Tradingview Chart',
        template: 'res/index.html',
        filename: 'index.html'
    })
],
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};