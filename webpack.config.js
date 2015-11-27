var path = require('path');
module.exports = {
  entry:{
    index:'./public/js/index'
  },
  output:{
    path:path.join(__dirname,'public/build'),
    filename:'bundle-[name].js',
    publicPath:'/build/'
  },
  resolve:{
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module:{
  loaders:[
    {test:/\.css$/,loader:'style-loader!css-loader'},
    {test: /\.scss$/,loaders: ['style', 'css', 'sass']},
    {test:/\.js[x]?$/,exclude:/node_modules/,loader:'babel-loader',
    query: {
          optional: ['runtime']
        }}
  ]
}
}
