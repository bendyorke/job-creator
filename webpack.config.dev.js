var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'app'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  postcss: [
    require('postcss-nested'),
    require('postcss-custom-properties')({ variables: require('./app/css') }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css/,
      loaders: [
        'style',
        'css?module&importLoaders=1&localIdentName=[name]-[local]-[hash:4]',
        'postcss',
      ],
    }],
  },
};
