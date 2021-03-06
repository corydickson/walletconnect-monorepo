const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'WalletConnectQRCodeModal',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.svg$/, loader: 'svg-url-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
    ]
  }
}
