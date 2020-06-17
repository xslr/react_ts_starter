const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/index.jsx',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(s?)css/,
        // do not explicitly exclude or include paths to allow the loaders to find blueprintjs' css
        // include: [
        //   path.resolve(__dirname, 'src'),
        //   path.resolve(__dirname, 'node_modules/@blueprintjs'),
        // ],
        // exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
        ]
      },
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['source-map-loader']
      },
      {
        test: /\.js(x?)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader']
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  }
};