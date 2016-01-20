/*eslint-env node*/
'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');
var inDevMode = process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development";


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
      'redux-simple-router',
      'parse',
      'parse-react',
      'redux-thunk'
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
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: "babel-loader" },

      // eslint-loader
      // { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: "eslint-loader" },

      // Stylus loader
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },

      // required to write "require('./style.css')"
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style-loader!css-loader" },

      // required for bootstrap icons.
      //    the url-loader uses DataUrls.
      //    the file-loader emits files.
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
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(inDevMode ? "development" : "production")
      },
      'env.PROD': process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production',
      'env.PRODUCTION': process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production',
      'env.DEV': process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development',
      'env.DEVELOPMENT': process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development',
      'env.SOURCE': process.env.NODE_ENV === 'dev' ? JSON.stringify('http://localhost:5000') : JSON.stringify('https://hivemind-analytics.herokuapp.com')
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
