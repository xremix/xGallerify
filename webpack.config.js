/* globals module, __dirname */
'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/jquery.xgallerify.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "jquery.xgallerify.js"
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          minimize: true
        })
    ]
};