const http = require('http')
const server = http.createServer()
// req 请求对象，包含了客户端相关数据和属性
// res 响应对象，用于向客户端返回数据
server.on('request', (req, res) => {
    // url 客户端请求的url地址 端口号后面的地址
    let url = req.url;
    // method 客户端请求的方法
    let method = req.method;
    // headers 客户端请求头的信息
    let headers = req.headers;
    console.log(url, '000', method, '111')

    // 设置响应头，解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 向客户端响应内容，并结束
    res.end('Hello World!, 你好，世界！···')

})

server.listen(80, () => {
    console.log('Server is running on port 80, http:127.0.0.1')
})