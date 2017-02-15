'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './demo/index.jsx',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre'],
                }
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules|dist/,
                loader: 'eslint-loader',
            },
        ]
    },

    devtool: 'source-map',

    devServer: {
        host: '0.0.0.0',
        port: 4567,
        contentBase: path.join(__dirname, 'demo'),
    },
};
