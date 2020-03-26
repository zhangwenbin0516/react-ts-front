/**
********************************************
* @Project File: webpack.prod.conf.js
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/3/26 23:29
********************************************
*/
"use strict";
const path = require('path');
const fs = require('fs');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf');

const rmdir = require('rmdir')
const date = new Date()
let arr = [date.getFullYear()]
arr[1] = date.getMonth() + 1
arr[1] = arr[1] < 10 ? '0' + arr[1] : arr[1]
arr[2] = date.getDate()
arr[2] = arr[2] < 10 ? '0' + arr[2] : arr[2]
let times = [date.getHours()]
times[0] = times[0] < 10 ? '0' + times[0] : times[0]
times[1] = date.getMinutes()
times[1] = times[1] < 10 ? '0' + times[1] : times[1]
const filePath = path.join(__dirname, '..', './')
let files = fs.readdirSync(filePath)
let isFile = 'dist-' + arr.join('.') + '-' + times.join('.');
files.filter((item) => {
    if (item.match('dist')) {
        rmdir(path.join(__dirname, '..', item), function(err, dirs, files) {})
        rmdir(path.join(__dirname, '..', item + '.zip'), function(err, dirs, files) {})
    }
})

module.exports = webpackMerge(webpackBase, {
    mode: 'production',
    output: {
        filename: 'js/[name].[Hash:9].js',
        path: path.join(__dirname, '..', isFile),
        publicPath: '/'
    },
    plugins: []
})