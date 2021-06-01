/* eslint-env node */
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './demo/index.jsx',

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
        host: '0.0.0.0',
        port: 4567,
        contentBase: path.join(__dirname, 'demo'),
    },
};
