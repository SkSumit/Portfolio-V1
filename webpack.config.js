const path = require('path')



module.exports = {
    entry : './source/app.js',
    output :{
        path :path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },{
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }]
      },
      devtool : 'cheap-module-eval-source-map',
      devServer :{
        contentBase : path.join(__dirname,'public'),
      }
 
}