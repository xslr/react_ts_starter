const path = require('path');
const webpack = require('webpack');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = [
  {
    name: "frontend",
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
  },

  // {
  //   entry: {
  //     server: './server.js',
  //   },
  //   output: {
  //     path: path.join(__dirname, 'dist'),
  //     publicPath: '/',
  //     filename: '[name].js'
  //   },
  //   target: 'node',
  //   node: {
  //     // Need this when working with express, otherwise the build fails
  //     __dirname: false,   // if you don't put this is, __dirname
  //     __filename: false,  // and __filename return blank or /
  //   },
  //   externals: [nodeExternals()], // Need this to avoid error when working with Express
  //   module: {
  //     rules: [
  //       {
  //         // Transpiles ES6-8 into ES5
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: "babel-loader"
  //         }
  //       },
  //       {
  //         // Loads the javacript into html template provided.
  //         // Entry point is set below in HtmlWebPackPlugin in Plugins
  //         test: /\.html$/,
  //         use: [{loader: "html-loader"}]
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new HtmlWebPackPlugin({
  //       template: "./index.html",
  //       filename: "./index.html",
  //       excludeChunks: [ 'server' ]
  //     })
  //   ]
  // }
];