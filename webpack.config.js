const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/scripts.js",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};