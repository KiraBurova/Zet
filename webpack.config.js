const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
          {
            test: /\.css$|\.sass$|\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader?url=false'
              },
              { loader: 'sass-loader' },
            ],
          },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {test: /\.png$|jpg|jpeg/, use: [
        'file-loader?name=i/[hash].[ext]'
    ]}
    ],
  },
  resolve: {
    extensions: ['.js', '.es6'],
    modules: ['node_modules', 'spritesmith-generated']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  devServer: {
    port: 8080,
    contentBase: './src',
    watchContentBase: true
 },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
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
          image: path.resolve(__dirname, 'src/spritesmith-generated/sprite.png'),
          css: path.resolve(__dirname, 'src/spritesmith-generated/sprite.scss')
      },
      apiOptions: {
          cssImageRef: '../spritesmith-generated/sprite.png'
      }
  })
  ],
};