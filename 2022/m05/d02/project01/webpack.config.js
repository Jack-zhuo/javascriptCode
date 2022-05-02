const HtmlPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',
    filename:'./index.html',
})

module.exports = {
    mode: 'development',
    devServer: {
        static:'./',
        open:true,
        host:'127.0.0.1',
        port:80
    },
    plugins:[htmlPlugin],
    module:{
           rules:[
               { test:/\.css$/,use:['style-loader','css-loader']},
               { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
               { test:/\.jpg|png|gif$/,use:'url-loader'}
           ]
    }
}