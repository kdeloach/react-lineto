'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.jsx',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                }
            }
        ]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-lineto.js',
        library: 'react-lineto',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
};
