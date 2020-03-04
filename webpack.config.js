const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => ({
  entry: './src/index.js',
  mode: env,
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // Minify JS
  ...(env === 'production' ? {
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: false,
          terserOptions: {
            ecma: 5,
          },
        }),
      ],
      namedModules: true,
      namedChunks: true,
    },
  } : {}),
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/img/',
        to: 'img',
      },
    ]),
    // Move share image to dist folder
    new CopyWebpackPlugin([
      {
        from: 'src/share.png',
        to: '',
      },
    ]),
    // Move .htaccess to dist folder
    new CopyWebpackPlugin([
      {
        from: '.htaccess',
        to: '',
      },
    ]),
    // Move robots.txt to dist folder
    new CopyWebpackPlugin([
      {
        from: 'robots.txt',
        to: '',
      },
    ])
  ]
});

