const path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "./build",
      filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
