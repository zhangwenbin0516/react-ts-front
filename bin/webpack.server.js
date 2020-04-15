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
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, '..', 'src/index.tsx')
    },
    output: {
        filename: 'js/[name].[Hash].js',
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsc", ".js", ".json", ".scss", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.t(s|sc)$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: {
                    loader: "source-map-loader"
                }
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "中博题库",
            template: path.join(__dirname, '..', 'static/index.html'),
            filename: 'index.html'
        })
    ]
}