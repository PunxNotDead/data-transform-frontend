const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: "./src/main.ts",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
	},

	resolve: {
		extensions: ['.js', '.ts']
	},

	module: {
		loaders: [{
			test: /\.ts?$/,
			exclude: /node_modules/,
			loaders: ["ts-loader"]
		},
		{
			test: /\.less$/,
			loader: "style!css!less"
		}]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'src', 'index.html'),
			to: path.resolve(__dirname, 'dist', 'index.html')
		}, {
			from: path.resolve(__dirname, 'src', 'templates'),
			to: path.resolve(__dirname, 'dist', 'templates')
		}])
	]
};