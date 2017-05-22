'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  //plugins work on entire app
  plugins: [
    //this creates an empty HTML index.html file for us with the name of bundle.js from our output
    new HTMLPlugin({
      template: `${__dirname}/app/index.js`
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  output: {
    //directory we want to put things into
    path: `${__dirname}/build`,
    //this is the name of the file we will serve out
    filename: 'bundle.js',
  },
  //loader rules
  module: {
    //rules are loader rules. what happens when we require in specific loaders
    rules: [
      {
        //regex checks
        test: /\.js$/,
        exclude: /node_modules/,
        //use this loader for all .js files
        loader: 'babel-loader',
      },
      {
        //rules for all .scss files
        test: /\.scss$/,
        //use this loader for the .scss files
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  }
};
