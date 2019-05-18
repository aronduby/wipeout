const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
require("@babel/register");

// Webpack Configuration
const config = {

    entry: ['babel-polyfill', './src/index.js'],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc')))
                    }
                }],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.png$/,
                use: ['file-loader'],
            },
            {
                test: /\.mp3$/,
                use: ['file-loader']
            }
        ]
    },

    devtool: 'source-map',

    plugins: [
        new htmlWebpackPlugin({
            title: 'Ceros Ski'
        })
    ],
};

module.exports = config;