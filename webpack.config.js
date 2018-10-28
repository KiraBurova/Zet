const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.es6'],
        modules: ['node_modules', 'spritesmith-generated']
    },
    module: {
        rules: [
            {
                test: /\.css$|\.sass$|\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?url=false'
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {test: /\.png$|jpg|jpeg/, use: [
                'file-loader?name=i/[hash].[ext]'
            ]}
        ]
    },
    devServer: {
        port: 8080,
        contentBase: './src',
        watchContentBase: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/assets/img/icons'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/assets/img/sprite.png'),
                css: path.resolve(__dirname, 'src/styles/sprite.scss')
            },
            apiOptions: {
                cssImageRef: './assets/img/sprite.png'
            }
        }),
        new CopyWebpackPlugin([{from: './src/assets', to: './assets'}])
    ]
};