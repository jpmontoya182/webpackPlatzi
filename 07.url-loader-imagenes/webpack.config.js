const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader ,
                        "css-loader"   
                    ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use : {
                    loader: "babel-loader", 
                }                
            }, 
            {
                test :/\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolveLoader: {
        moduleExtensions: [ '-loader' ],
    }
}