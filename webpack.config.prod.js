var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'app'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  postcss: [
    require('postcss-nested'),
    require('postcss-custom-properties')({ variables: require('./app/css') }),
    require('postcss-color-function'),
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
    }, {
      test: /\.(png|jpe?g)$/,
      loaders: ['file'],
    }],
  },
};
