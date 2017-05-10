var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/app/index.jsx'),

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My application',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],

  devServer: {
    port: 3000
  }
};

module.exports = config;