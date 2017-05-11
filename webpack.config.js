const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval-source-map',

  entry: path.resolve(__dirname, 'src/index.js'),

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
        use: ['babel-loader'],
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]',
              },
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
              },
            },
          }],
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
