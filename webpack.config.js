const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module:{
    rules: [ 
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: "css-loader"
          }
        )
      }, {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            // options: { 
            //     limit: 8000, // Convert images < 8kb to base64 strings
            //     name: 'images/[hash]-[name].[ext]'
            // } 
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'main.css' }),
  ]
};

module.exports = config;
