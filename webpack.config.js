const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './src'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.es6'],
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
    new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }
    )
  ],
};