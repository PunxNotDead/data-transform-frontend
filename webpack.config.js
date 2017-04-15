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
		loaders: [
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				loaders: ["ts-loader"]
			}
		]
	},
	plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: path.resolve(__dirname, 'dist', 'index.html') }
		])
	]
};