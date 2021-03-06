const path = require('path');
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),//入口，表示要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js' //这是指定 输出的文件的名称
    },
    devServer:{
        static:'./'
    }
}