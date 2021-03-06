const path = require('path');
const webpack = require('webpack');
// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
// context keeps our dirname - folder 'src' in our case, it's a shortcut, so we don't need to type it every time
    context: path.resolve(__dirname, './'),
// to make hot reload working with webpack middleware we have to list next entry points
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            './main.js',
        ]
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'bundles')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ["transform-react-jsx"]
            }
        },
        {
            test:/\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './index.html'
        }),
        new ExtractTextPlugin('./style.css'),
    ]
};