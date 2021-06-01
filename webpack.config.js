/* eslint-env node */
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

const outputPath = path.join(__dirname, 'dist')

const config = {
    entry: './src/index.jsx',

    mode: 'production',
    plugins: [new ESLintPlugin({ extensions: '.jsx' })],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
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
        optimization: {
            minimize: false,
        }
    }),
    Object.assign({}, config, {
        output: {
            path: outputPath,
            filename: 'react-lineto.min.js',
            library: 'react-lineto',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        }
    })
];
