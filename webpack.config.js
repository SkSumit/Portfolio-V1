
const path = require('path')
const ETP = require('extract-text-webpack-plugin')


module.exports = (env) =>{
  
  const isProduction = env === 'production'
  const CSSExtract = new ETP('style.css')
  return {
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
          use: CSSExtract.extract({
            use: [
              
             {
               loader:'css-loader',
               options:{
                 sourceMap:true
               }
             },
             {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            },
            ]
          })
        }]
      },
      plugins:[
        CSSExtract
      ],
      devtool : isProduction ? 'source-map' : 'inline-source-map',
      devServer :{
        contentBase : path.join(__dirname,'public'),
      }
 
}

}
