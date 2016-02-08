'use strict'

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src')
var inDevMode = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development'


module.exports = {
  target: 'web',
  cache: true,
  entry: {
    common: [
      'chartist',
      'history',
      'immutable',
      'jquery',
      'rc-slider',
      'react',
      'react-addons-update',
      'react-bootstrap',
      'react-chartist',
      'react-dom',
      'react-router',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'reselect',
      'parse',
      'parse-react'
    ],
    index: path.join(srcPath, 'index.js')
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },
  module: {
    loaders: [
      // required for react jsx
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: 'babel-loader' },

      // eslint-loader
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: 'eslint-loader' },

      // Sass loader
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css', 'sass']
      },

      // Stylus loader
      // { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },

      // required to write "require('./style.css')"
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: 'style-loader!css-loader' },

      // required for bootstrap icons.
      //    the url-loader uses DataUrls.
      //    the file-loader emits files.
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader?prefix=font/' },
      { test: /\.eot$/, loader: 'file-loader?prefix=font/' },
      { test: /\.svg$/, loader: 'file-loader?prefix=font/' },

      // misc
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(inDevMode ? 'development' : 'production')
      },
      'IN_DEV_MODE': inDevMode,
      'env.SOURCE': inDevMode ? JSON.stringify('http://localhost:5000') : JSON.stringify('https://hivemind-analytics.herokuapp.com')
    })
  ],
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
}
