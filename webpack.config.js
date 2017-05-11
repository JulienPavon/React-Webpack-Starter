const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval-source-map',

  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My application',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],

  devServer: {
    port: 3000,
  },
};

module.exports = config;
