const miniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'development';

process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';

module.exports = {
    mode,
    devtool: 'source-map',
    module: {
        rules: [
            {
              test: /\.s?css$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
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
    devServer: {
        static: './dist',
        hot: true
    }
};