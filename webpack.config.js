const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
require("@babel/register");

// Webpack Configuration
const config = {

    entry: ['babel-polyfill', './src/index.js'],

    output: {
        path: path.resolve(__dirname, './docs'),
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
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        },
                    }
                ],
            },
            {
                test: /\.mp3$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'audio'
                    }
                }]
            }
        ]
    },

    devtool: 'source-map',

    plugins: [
        new htmlWebpackPlugin({
            title: 'Wipe Out!'
        })
    ],
};

module.exports = config;