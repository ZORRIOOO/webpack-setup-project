const miniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'development';
let target = 'web';

process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';
process.env.NODE_ENV === 'production' ? target = 'browserslist' : target = 'web';

module.exports = {
    mode,
    target,
    output: {
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
                        loader: miniCssExtractPlugin.loader,
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
        new miniCssExtractPlugin()
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