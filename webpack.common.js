/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/public/'),
    //       to: path.resolve(__dirname, 'dist/'),
    //       globOptions: {
    //         // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
    //         ignore: ['**/images/**'],
    //       },
    //     },
    //   ],
    // }),
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 90,
    //       },
    //     },
    //   ],
    //   overrideExtension: true,
    // }),
  ],
};