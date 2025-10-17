// ip、域名、域名解析器
// ip地址和域名是一一对应的，这关系存放在域名服务器（dns）电脑中，也称为域名解析服务器。
// 1、引入模块
const http = require('http');
// 2、创建服务器
const server = http.createServer();
// 3、监听请求 req 客户端请求 res 服务器响应
server.on('request', (req, res) => {
    console.log('收到请求');
})
// 4、启动服务器
server.listen(80, ()=>{
    console.log('服务器启动成功，监听80端口.http:127.0.0.1:80');
})