const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  watch: true,

  module: {
    rules: [
        // {
        //     test: /\.js/,
        //     use: [
        //         {
        //             loader: 'babel-loader',
        //             options: { presets: ["env"] }
        //         }
        //     ]
        // },

        {
            test: /\.less$/,
            use: [{
              loader: 'style-loader' // creates style nodes from JS strings
            }, {
              loader: 'css-loader' // translates CSS into CommonJS
            }, {
              loader: 'less-loader' // compiles Less to CSS
            }]
    }
    ]
}
};