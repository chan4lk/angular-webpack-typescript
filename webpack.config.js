var webpack = require('webpack');
module.exports = {
    entry: {
        app: './app',
        vendor: ["jquery", "angular", "bootstrap"]
    },
    output: {
        filename: "dist/[name].bundle.js",
        sourceMapFilename: "dist/[name].js.map",
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/[name].bundle.js"),
        new webpack.optimize.UglifyJsPlugin()        
    ]
}