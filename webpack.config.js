const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: './js/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}