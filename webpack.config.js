const path = require('path');
const webpack = require('webpack');

const PATHS = {
	app: './client/index.js',
	dist: path.join(__dirname, 'client', 'dist'),
};

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
  	loaders: [{
  		exclude: /node_modules/,
  		loaders: ['babel-loader']
  	}],
  },
  watch: true,
  devTool: 'source-map',
  resolve: {
  	extensions: ['', '.js', '.jsx'],
  }
}
