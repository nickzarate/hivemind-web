'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    common: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
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
      { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /(node_modules)/, loader: "babel-loader" },

      // eslint-loader
      { test: /\.js$/, exclude: /(node_modules)/, loader: "eslint-loader" },
      { test: /\.jsx$/, exclude: /(node_modules)/, loader: "eslint-loader" },

      // Stylus loader
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },

      // required to write "require('./style.css')"
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },


      // required for bootstrap icons.
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
      { test: /\.eot$/, loader: "file-loader?prefix=font/" },
      { test: /\.svg$/, loader: "file-loader?prefix=font/" },

      // misc
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
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
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ],
  node: {
    net: "empty",
    tls: "empty"
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  }
};
