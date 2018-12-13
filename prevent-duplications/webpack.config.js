const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        contact : path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { 
                        loader: 'css-loader', 
                        options: {
                            modules: true, 
                            importLoaders : 1
                        }
                    },
                    { loader: 'postcss-loader'},                    
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader : 'css-loader'}, 
                    { 
                        loader: 'stylus-loader', 
                        options : {
                            use : [
                                require('nib'),
                                require('rupture')
                            ], 
                            import : [
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl'
                            ]
                        }
                    },  
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { 
                        loader: 'less-loader', 
                        options: {
                            noIeCompat: true
                        } 
                },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
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
            filename: 'css/[name].css',            
        }), 
    ],
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
    optimization : {
        splitChunks : {
            chunks : 'all'
        }, 
    }

}