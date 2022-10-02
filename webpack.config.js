let mode = 'development';

process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';

module.exports = {
    mode,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: './dist'
    }
};