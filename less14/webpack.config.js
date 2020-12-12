const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ]
},

plugins: [
  new HtmlWebpackPlugin({
    title: 'webpack Boilerplate',
    template: path.resolve(__dirname, './src/template.html'), // шаблон
    filename: 'index.html' // название выходного файла
  }
)
]
};
