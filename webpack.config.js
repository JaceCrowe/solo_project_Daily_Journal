const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        src: './client/index.js'
    },
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/build',
            hot: true,
        },
        proxy: {
            '/api' : 'http://localhost:3000',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
          template: 'index.html',
    }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                      {
                          loader: 'babel-loader',
                          options: {
                              exclude: /(node_modules)/,
                              presets: ['@babel/preset-env', '@babel/preset-react']
                          },
                        },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader",'css-loader','sass-loader'],
            }
        ]
    }
}