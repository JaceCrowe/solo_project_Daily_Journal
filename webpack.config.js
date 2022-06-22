const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
      src: './src/index.js',
  },
  mode: 'development',
  //process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
      static: {
          directory: path.resolve(__dirname, 'build'),
          publicPath: '/build',
      },
      proxy: {
          '/api' : 'http://localhost:3000',
      }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
      }
      )],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [
              {
                loader: 'babel-loader',
                options: {
                  exclude: /(node_modules)/,
                  presets: ['@babel/preset-env','@babel/preset-react'],
                },
              },
        ]
      },
      {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader","sass-loader"],
      }
    ]
  },
};  //{src:





// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// const webpack = require('webpack')

// module.exports = {
//     entry: "./src/index.js",
//     mode: 'development',
//     target: 'node',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//         publicPath: 'build',
//     },
//     devServer: {
//         static: {
//             directory: path.resolve(__dirname, 'build'),
//             publicPath: '/build',
//         },
//         proxy: {
//             '/api' : 'http://localhost:3000',
//         }
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//           title: 'Development',
//           template: 'index.html'
//     }),
//       new webpack.HotModuleReplacementPlugin(),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: [
//                       {
//                           loader: 'babel-loader',
//                           options: {
//                               exclude: /(node_modules)/,
//                               presets: ['@babel/preset-env', '@babel/preset-react']
//                           },
//                         },
//                 ]
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: ["style-loader",'css-loader','sass-loader'],
//             },
//             {
//                 test: /\.(png|jp(e*)g|svg|gif)$/,
//                 use: ['file-loader'],
//             },
//         ]
//     }
// }