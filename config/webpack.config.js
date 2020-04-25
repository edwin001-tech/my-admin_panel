const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname,'client','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    filename: 'index.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'client')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'client','index.html')
    }),
  ]
};