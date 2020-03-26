/**
********************************************
* @Project File: webpack.base.conf.js
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/3/26 23:28
********************************************
*/
"use strict";
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src/index.ts')
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.scss', '.json'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.css$/,
                use: [

                ]
            }
        ]
    },
    plugins: [

    ]
}