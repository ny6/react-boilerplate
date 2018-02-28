const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist', 'js'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        default: false,
        vendors: false,
      },
    },
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
};
