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
    stats: {
      chunks: false
    }
  },
  resolve: {
    root: srcPath,
    extensions: ["", ".js", ".jsx"],
    modulesDirectories: ["node_modules", "src"]
  },
  entry: [
    "bootstrap-loader",
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    path.resolve(srcPath, "index")
  ],
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    pathinfo: true,
    publicPath: "/"
  },
  module: {
    loaders: [
      // required for react jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
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
  sassResources: path.join(srcPath, "assets/sass/resources.scss"),
  postcss: [
    require('autoprefixer')
  ],
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
    new webpack.ProgressPlugin(function(percentage, message) {
      process.stderr.write(message + "\r");
    }),
    new webpack.ProvidePlugin({
      "fetch": "isomorphic-fetch"
    })
  ]
}

// entry: {
//   common: [
//     'bootstrap-loader',
//     "chartist",
//     "isomorphic-fetch",
//     "jquery",
//     "parse",
//     "parse-react",
//     "rc-slider",
//     "react",
//     "react-addons-update",
//     "react-bootstrap",
//     "react-chartist",
//     "react-dom",
//     "react-redux",
//     "react-redux-form",
//     "react-router",
//     "react-router-redux",
//     "redbox-react",
//     "redux",
//     "redux-actions",
//     "redux-devtools",
//     "redux-devtools-dock-monitor",
//     "redux-devtools-log-monitor",
//     "redux-localstorage",
//     "redux-thunk",
//     "reselect"
//   ],
//   index: [
//     "eventsource-polyfill",
//     "webpack-hot-middleware/client",
//     path.join(srcPath, "index.js")
//   ]
// },
