/*
 * File: webpack.server.js
 * Project: question-test-front
 * File Created: Wednesday, 15th April 2020 3:28:17 pm
 * Author: <<zhangwenbin>> (<<942623159@qq.com>>)
 * -----
 * Last Modified: Wednesday, 15th April 2020 3:29:09 pm
 * Modified By: <<zhangwenbin>> (<<942623159@qq.com>>>)
 * -----
 * Copyright 2017 - 2020 Your Company, Your Company
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, '..', 'src/app.module.tsx')
    },
    devtool: "source-map",
    devServer: {
        host: 'localhost',
        port: '4078',
        open: true,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"],
        alias: {
            '@': path.join(__dirname, '..', 'src'),
            '@page': path.join(__dirname, '..', 'src/components'),
            '@redux': path.join(__dirname, '..', 'src/redux')
        }
    },
    module: {
        rules: [
            {
                test: /\.t(s|sx)$/,
                include: path.join(__dirname, '..', 'src'),
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: [{
                    loader: "source-map-loader"
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true, // 模拟删除
            verbose: true, // 写入日志
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist")]
        }),
        new HtmlWebpackPlugin({
            title: "中博题库",
            facicon: path.join(__dirname, '..', 'dist/facicon.png'),
            template: path.join(__dirname, '..', 'static/index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '..', 'static/facicon.png'),
                to: path.join(__dirname, '..', 'dist/')
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'js/[name].[Hash].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    }
}