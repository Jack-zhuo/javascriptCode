
# http模块
    1. 互联网中每一台web服务器都有自己的IP地址，在终端中输入，ping www.baidu.com 可以查询百度的IP地址。
    2. 域名服务器：提供IP地址和域名转换服务的服务器。
    3. 127.0.0.1对应的域名是localhost。
    4. 端口号：客户端发来的网络请求，通过端口号，可以准确地交给相对应的web服务处理。80端口可以省略。
    5. 如何用node.js创建web服务器？1.引入http模块。const http = require('http');2.创建web服务器。 const server = http.createServer();3.为服务器绑定请求事件。server.on('request',function(req,res){console.log("Someone request our web server....");}4.start web server. server.listen(80,function(){});
    6. server.on()第二个参数是回调函数，参数有两个：req，res。请求和响应。req.url is url address requested by the client. req.method is method requested by the client.
    7. res.end(str); the second param is res. We can use res.end(str) statement to end request and response relevant content.

# Basic concept of modularization
   ## 1. what is modularization?
      The modularization refers to processing that system is divided to several modules from top to down,when to solve hard question.module is unit that can be divided and conbined and changed. 
      the example in real life: game machine of little king.
      The modularization of field of programming must obey stated rules.And a big file is divided to small file of independent and interdependent. 
      what is the benefits of modularzing your code?
      1. improve reusability of your code.
      2. improve maintainability of your code.
      3. loading by demand
   ## 2. Standard of modularizaiton
    standard of modularization is rules that we can obey when code is divided and conbined.
    for example:
    1. what syntanic format to used to reference modules.
    2. what syntanic format in modules to used to reveal toward exteral.
    The advantage of modularization: Everone observes modular specification to write code to reducing cost of comminication. it is very conveniention to each modules of call each other.it very good to you and other.

   