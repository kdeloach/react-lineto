'use strict';

var webpack = require('webpack');
var path = require('path');

var outputPath = path.join(__dirname, 'dist');

var config = {
    entry: './src/index.jsx',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
        ]
    },

    externals: [
        'prop-types',
        'react'
    ]
};

module.exports = [
    Object.assign({}, config, {
        output: {
            path: outputPath,
            filename: 'react-lineto.js',
            library: 'react-lineto',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    }),
    Object.assign({}, config, {
        output: {
            path: outputPath,
            filename: 'react-lineto.min.js',
            library: 'react-lineto',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    })
];
