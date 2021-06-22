const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  entry: {
    'dist': './src/index.js',
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'index.js',
    publicPath: "",
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 8888,
    writeToDisk: true,
    open: true,
  },
  module: {

    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },

      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',

        ]
      },
    ],

  },

  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new CssMinimizerWebpackPlugin({})

  ]
}