const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require("path");

let mode = 'development';
let target = 'web';

process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';
process.env.NODE_ENV === 'production' ? target = 'browserslist' : target = 'web';

module.exports = {
    mode,
    target,
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|jpg|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader', 'postcss-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    devServer: {
        static: './dist',
        hot: true
    }
};