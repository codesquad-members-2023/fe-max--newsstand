const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,"..", 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  watch: true,
};