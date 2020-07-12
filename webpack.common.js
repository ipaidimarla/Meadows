const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: ['babel-polyfill', "./index.js", './src/styles/main.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    devtool: 'source-map',
    
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-html|lit-element)\/).*/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // injects styles into DOM
                    'css-loader'// turns css into commonjs
                ]

            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: 'file-loader?name=images/[name].[ext]'

            }

        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin({
        patterns: [
            { from: path.resolve(__dirname, 'src/assets/images'), to:'image-files' }
        ],
      } ) ]

}