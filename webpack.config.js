const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/lzma/LZMA.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'lzma.js',
    path: path.resolve(__dirname, 'build'),
    library: 'lzma',
    libraryTarget: 'umd',
  },
}
