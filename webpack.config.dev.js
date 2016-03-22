"use strict";

var path = require("path");
var assetsPath = path.resolve("src/assets");
var srcPath = path.resolve("src");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  debug: true,
  devtool: "#source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api/*": "http://localhost:5000"
    },
    inline: true
  },
  resolve: {
    root: srcPath,
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules", "src"]
  },
  entry: [
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    path.resolve(srcPath, "index")
  ],
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    pathInfo: true,
    publicPath: "/"
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
        loaders: ['style', 'css', 'sass']
      },

      // required to write "require('./style.css')"
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style!css"
      },

      // required for bootstrap icons.
      //    the url-loader uses DataUrls.
      //    the file-loader emits files.
      // { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      // { test: /\.ttf$/, loader: "file-loader?prefix=font/" },
      // { test: /\.eot$/, loader: "file-loader?prefix=font/" },
      // { test: /\.svg$/, loader: "file-loader?prefix=font/" },
      { test: /\.(woff|woff2|ttf|eot|svg)$/, loader: 'file' },

      // misc
      { test: /\.json$/, loader: "json" },
      { test: /\.png$/, loader: "url?limit=100000" },
      { test: /\.jpg$/, loader: "file" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(assetsPath, "images/favicon.png"),
      template: path.resolve(assetsPath, "index.html")
    }),
    new webpack.DefinePlugin({
      "__DEV__": true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery",
      "fetch": "isomorphic-fetch"
    })
  ]
}
