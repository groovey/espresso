const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'resources', 'js', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ],
        }],
    },
};