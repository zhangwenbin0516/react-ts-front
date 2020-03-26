/**
********************************************
* @Project File: webpack.prod.conf.js
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/3/26 23:29
********************************************
*/
"use strict";
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf');
module.exports = webpackMerge(webpackBase, {
    mode: 'production',
    output: {
        filename: '/js/[name].[Hash:9].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    }
})