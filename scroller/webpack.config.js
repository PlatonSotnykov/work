const PRODUCTION = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackDevServer = require('webpack-dev-server');

var plugins = [];

plugins.push(new ExtractTextPlugin("bundle.css"));
PRODUCTION && plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: plugins,
    devtool: PRODUCTION ? '' : 'source-map'
};
