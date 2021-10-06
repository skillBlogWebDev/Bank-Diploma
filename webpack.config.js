// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line no-undef
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = (env) => ({
  entry: {
    login: './src/login.js',
    account: './src/account.js',
  },
  output: {
    filename: '[name][contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|ttf|woff2)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/i,
        use: [
          env.prod ? MiniCSSExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/login.html',
    }),
    new MiniCSSExtractPlugin({
      filename: 'main[contenthash].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 3 }],
        ],
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
});
