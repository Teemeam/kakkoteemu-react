const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
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
    // Siirrä jakokuva dist-kansioon
    new CopyWebpackPlugin([
      {
        from: 'src/share.png',
        to: '',
      },
    ]),
    // Siirrä .htaccess dist-kansioon
    new CopyWebpackPlugin([
      {
        from: '.htaccess',
        to: '',
      },
    ]),
    // Sirrä robots.txt dist-kansioon
    new CopyWebpackPlugin([
      {
        from: 'robots.txt',
        to: '',
      },
    ])
  ]
}

