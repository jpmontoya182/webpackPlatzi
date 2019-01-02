const webpack = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        modules :[
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        library: '[name]',
        publicPath: './dist/',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',            
        }), 
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ],     
}