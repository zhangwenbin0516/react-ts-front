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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        inline: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"],
        alias: {
            '@': path.join(__dirname, '..', 'src'),
            '@page': path.join(__dirname, '..', 'src/components'),
            '@redux': path.join(__dirname, '..', 'src/redux'),
            '@template': path.join(__dirname, '..', 'src/template')
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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: path.join(__dirname, '..', 'src'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8921,
                            name: 'images/[name].[hash:9].[ext]'
                        }
                    }
                ]
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
            title: "冻师傅",
            facicon: path.join(__dirname, '..', 'dist/favicon.ico'),
            template: path.join(__dirname, '..', 'static/index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '..', 'static/favicon.ico'),
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
