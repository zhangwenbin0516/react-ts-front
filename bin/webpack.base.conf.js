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
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: [path.join(__dirname, '..', 'src/app.module.tsx')]
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', 'jsx', '.scss', '.json'],
        // alias: {
        //     "@page": path.join(__dirname, '..', 'src/components')
        // }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '中博题库',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            filename: 'index.html',
            template: path.join(__dirname, '..', 'static/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].[Hash:9].js',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}