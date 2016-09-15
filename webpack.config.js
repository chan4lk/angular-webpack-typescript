var webpack = require('webpack');
module.exports = {
    entry: {
        app: './app',
        vendor: ["jquery", "angular", "bootstrap"]
    },
    output: {
        filename: "dist/app.bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/vendor.bundle.js")
    ]
}