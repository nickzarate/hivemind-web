"use strict";

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var srcPath = path.resolve("src");
var assetsPath = path.resolve("src/assets");

module.exports = {
  resolve: {
    root: srcPath,
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules", "src"]
  },
  entry: {
    common: [
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
      "redux",
      "redux-actions",
      "redux-localstorage",
      "redux-thunk",
      "reselect"
    ],
    "index": path.resolve(srcPath, "index.js")
  },
  output: {
    path: path.resolve("dist"),
    publicPath: "",
    filename: "js/[name]-[hash].js"
  },
  module: {
    loaders: [
      // required for react jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel"
      },

      // eslint-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "eslint"
      },

      // Sass loader
      {
        test: /\.scss$/,
        include: path.resolve(assetsPath, "sass"),
        loaders: ["style", "css", "sass"]
      },

      // Stylus loader
      // { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },

      // required to write "require("./style.css")"
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style!css"
      },

      // required for bootstrap icons.
      //    the url-loader uses DataUrls.
      //    the file-loader emits files.
      // { test: /\.(woff|woff2|ttf|eot|svg)$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file?prefix=font/" },
      { test: /\.eot$/, loader: "file?prefix=font/" },
      { test: /\.svg$/, loader: "file?prefix=font/" },

      // misc
      { test: /\.json$/, loader: "json" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(assetsPath, "images/favicon.png"),
      hash: true,
      template: path.resolve(assetsPath, "index.html")
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "__DEV__": false
    }),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "fetch": "isomorphic-fetch"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "js/[name]-[hash].js"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: false
      }
    })
  ]
}
