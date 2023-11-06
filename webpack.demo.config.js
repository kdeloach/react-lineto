/* eslint-env node */
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './demo/index.jsx',
    output: {
        path: path.join(__dirname, 'demo'),
        filename: 'bundle.js'
    },

    mode: 'development',
    plugins: [new ESLintPlugin({ extensions: '.jsx' })],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'demo')
        }
    },
};
