const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  devtool: 'source-map',
  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /src/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
};
