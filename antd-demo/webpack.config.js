const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader'],
                exclude: /node_modules/,
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.(js|tsx?)$/,
                use: "source-map-loader"
            },
            {
                test: /\.(css|less|scss)$/,
                use: "css-loader",
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: "file-loader"
            }
        ]
    }
}

module.exports = config