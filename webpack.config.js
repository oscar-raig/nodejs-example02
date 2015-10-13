var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
	{ test: /\.js$/, loader: 'babel-loader' },
	{ test: /\.css$/, loader: 'style-loader!css-loader' },
	{ test: /\.jsx$/, loader: 'babel' }
	]}
};

module.exports = config;
