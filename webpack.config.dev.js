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
      "react-router",
      "react-router-redux",
      "redbox-react",
      "redux",
      "redux-devtools",
      "redux-devtools-dock-monitor",
      "redux-devtools-log-monitor",
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
        exclude: /node_modules/,
        loaders: ['style-loader', 'css', 'sass']
      },

      // Stylus loader
      // { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },

      // required to write "require('./style.css')"
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style-loader!css-loader"
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
    // new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: 'src/index.html'
    // }),
    // new webpack.NoErrorsPlugin(),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify(inDevMode ? "development" : "production")
    //   },
    //   "IN_DEV_MODE": inDevMode,
    //   'env.SOURCE': inDevMode ? JSON.stringify('http://localhost:5000') : JSON.stringify('https://hivemind-analytics.herokuapp.com')
    // })
  ]
}