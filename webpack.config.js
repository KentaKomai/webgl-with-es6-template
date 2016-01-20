
module.exports = {
  entry: {
    app: './assets/sources/es6/app.js'
  },
  output: {
    path:__dirname + '/assets/sources/assets/dist/javascript',
    filename: 'app.bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
