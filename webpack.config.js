var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './js/main.js'],
  },
  output: {
    path: './public/built',
    filename: 'dist.js',
    publicPath: 'http://localhost:8080/built/',
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
  ],
};
