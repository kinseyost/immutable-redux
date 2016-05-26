const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        ),
      },
    ],
  },
  postcss: [require('autoprefixer')],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};
