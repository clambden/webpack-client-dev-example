const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        "./src/index.js"
    ],    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'public/index.html',
            favicon: "public/favicon.png"
        })
    ],        
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: './dist'
    },    
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }          },
        ]
    }    
};