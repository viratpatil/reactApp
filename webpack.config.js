const path = require('path');
const webpack = require('webpack');
// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
// context keeps our dirname - folder 'src' in our case, it's a shortcut, so we don't need to type it every time
    context: path.resolve(__dirname, 'src'),
// to make hot reload working with webpack middleware we have to list next entry points
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            './main.jsx',
        ]
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'bundles')
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ["transform-react-jsx"]
            }
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './index.html'
        })
    ]
};