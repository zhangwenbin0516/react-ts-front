/**
********************************************
* @Project File: webpack.dev.conf.js
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/3/26 23:28
********************************************
*/
"use strict";
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf');

module.exports = webpackMerge(webpackBase, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        hot: true,
        host: 'localhost',
        port: '4560',
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        filename: 'js/[name].[Hash:9].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/',
    },
    plugins: [

    ]
})