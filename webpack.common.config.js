const CopyWebpackPlugin = require('copy-webpack-plugin'); //拷贝资源插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, './blog.section.frame/index.tsx')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            exclude: /node_modules/
        },{
            test: /\.tsx$/,
            use: ['ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        // 拷贝资源到指定目录下
        new CopyWebpackPlugin([
            {from: './blog.section.frame/assects', to: 'assects'},
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './blog.section.frame/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            'common-plugins': './blog.plugins.common',
        }
    }
};

module.exports = commonConfig;