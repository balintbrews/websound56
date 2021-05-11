const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
    demo: './src/demo.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(
        process.env.NODE_ENV === 'production'
          ? 'https://websound56.benleavez.com'
          : 'http://localhost:8080'
      ),
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
    }),
    new HtmlWebpackPlugin({
      title: 'WebSound56',
    }),
  ],
};
