const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        //path
        path: path.resolve(__dirname, '/build'),
        //file name
        filename: 'bundle.js',
        publicPath: '/build'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        host: 'localhost',
        port: 8080,
        publicPath: '/build',
        proxy: {
          '/api/**': 'http://localhost:3000/',
          '/events/**': 'http://localhost:3000/',
          '/database/**': 'http://localhost:3000/',
          '/login/**': 'http://localhost:3000/',
          '/signup/**': 'http://localhost:3000/',
        },
        hot: true
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
            },
            {
              test: /\.(png|svg|jpe?g|gif|ico)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            }
        ]
    }
}