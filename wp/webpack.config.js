const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true,
  title: 'Test',
});

module.exports = {
  mode: 'development',
  entry: './src/home.js',
  output: {
    path: path.resolve('dist'),
    filename: 'build.js',
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  devServer: {
  compress: true,
  port: 5000,
  },
};
