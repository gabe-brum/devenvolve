module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },
  module: {
    // rules: [{ test: /\.txt$/, use: 'file-loader' }],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  watch: true
}

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

// module.exports = {
//   module: {
//     rules: [{ test: /\.txt$/, use: 'file-loader' }],
//   },
//   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
// };