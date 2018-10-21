const path = require('path');
require("@babel/polyfill");
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'client'),


  entry:["@babel/polyfill",'./src/js/index.jsx'],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ],
  },
};