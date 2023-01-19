const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './demo/list/main.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3999,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: ['web', 'es5'],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css',
    }),
  ],
};
