module.exports = {
  entry: './config.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{test: /\.js$/, loader: "compile-loader"}]
  }
};
