const path = require('path');

/* Webpack plugins */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
  entry: './src/index.js',
  mode: env,
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      /* All jpgs to dist/img/print folder */
      {
        test: /\.(jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img/print',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  /* Minify JS */
  ...(env === 'production'
    ? {
        optimization: {
          minimizer: [
            (compiler) => {
              new TerserPlugin({
                parallel: true,
                sourceMap: false,
                terserOptions: {
                  ecma: 5,
                },
              }).apply(compiler);
            },
          ],
          namedModules: true,
          namedChunks: true,
        },
      }
    : {}),
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        /* Move favicon files to dist/img/favicon folder */
        {
          from: 'src/img/favicon/',
          to: 'img/favicon',
        },
        /* Move share image to dist folder */
        {
          from: 'src/share.png',
          to: '',
        },
      ],
    }),
  ],
});
