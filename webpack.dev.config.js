const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: 'http://localhost:9000/',
		chunkFilename: 'js/[id].[chunkhash].js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		open: true,
		port: 9000,
		hot: true,
		publicPath: 'http://localhost:9000/',
		historyApiFallback: true
	},
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/'
					}
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		})
	]
};
