const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        modules: [
            __dirname,
            'node_modules'
        ]
    },
    watch:true,
    mode: "development",
    

});