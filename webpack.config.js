const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: "source-map",

  entry: './src/index.tsx',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js(x?)$/,
        use: ['source-map-loader']
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  devServer: {
    contentBase: './dist',
    // hot: true
  }
};