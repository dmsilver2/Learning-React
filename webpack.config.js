var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './app/main.js'
  ],
  output: {
    path: path.resolve(__dirname, "public/assets"),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.NoErrorsPlugin()
    ]

}
