"use strict";

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var srcPath = path.join(__dirname, "src");

module.exports = {
  debug: true,
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    colors: true,
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    inline: true,
    outputPath: path.join(__dirname, "dist"),
    open: "true"
  },
  resolve: {
    root: srcPath,
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules", "src"]
  },
  entry: {
    common: [
      'bootstrap-loader',
      "chartist",
      "isomorphic-fetch",
      "jquery",
      "parse",
      "parse-react",
      "rc-slider",
      "react",
      "react-addons-update",
      "react-bootstrap",
      "react-chartist",
      "react-dom",
      "react-redux",
      "react-redux-form",
      "react-router",
      "react-router-redux",
      "redbox-react",
      "redux",
      "redux-actions",
      "redux-devtools",
      "redux-devtools-dock-monitor",
      "redux-devtools-log-monitor",
      "redux-localstorage",
      "redux-thunk",
      "reselect"
    ],
    index: [
      "eventsource-polyfill",
      "webpack-hot-middleware/client",
      path.join(srcPath, "index.js")
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    pathInfo: true
  },
  module: {
    loaders: [
      // required for react jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      // eslint-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "eslint-loader"
      },
      // Sass loader
      {
        test: /\.scss$/,
        include: path.join(srcPath, "assets/sass"),
        loaders: ['style-loader', 'css?modules', 'postcss', 'sass', 'sass-resources']
      },

      // required to write "require('./style.css')"
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style-loader!css?modules!postcss"
      },

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
  sassResources: path.join(srcPath, "assets/sass/resources.scss"),
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(srcPath, "assets/images/favicon.png"),
      hash: true,
      template: path.join(srcPath, "assets/index.html")
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "__DEV__": true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "fetch": "isomorphic-fetch"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js"
    })
  ]
}

// {
//   test: /\app.scss$/,
//   include: path.join(srcPath, "assets/sass"),
//   loaders: ['style-loader', 'css', 'sass']
// },
// {
//   test: /\.scss$/,
//   include: path.join(srcPath, "assets/sass"),
//   loaders: ['style-loader', 'css?modules', 'sass'],
//   exclude: /\app.scss$/
// },