const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/index.tsx',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(s?)css/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
        ]
      },
      {
        enforce: 'pre',
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