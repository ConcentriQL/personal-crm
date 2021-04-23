const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        //path
        path: path.resolve(__dirname, 'build'),
        //file name
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    devServer: {
        publicPath: '/build',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            }
        ]
    }
}