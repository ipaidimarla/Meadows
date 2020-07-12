const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
module.exports = merge(common, {
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/Meadows/",
    },
    mode: "production",
    resolve: {
        modules: [
            __dirname,
            'node_modules'
        ]
    }

});