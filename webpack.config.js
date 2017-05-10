var path = require('path');

const config = {
  //context: path.resolve(__dirname, 'src/app'),

  entry: path.join(__dirname, 'src/app/index.jsx'),

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
  }
};

module.exports = config;