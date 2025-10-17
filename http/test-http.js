const http = require('http');

const fs = require('fs');

const path = require('path');

let content = ''
fs.readFile(path.join(__dirname, '../path/test-path/html-clock.html'), 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    content = data   
})

const server = http.createServer((req, res) => {
    // 设置请求头，处理中文乱码问题
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    let url = req.url
    let endContent = '404 Not Found'
    if (url === '/' || url === '/index.html') {
        endContent = content
    } else if (url === '/about.html') {
        endContent = "about"
    }
    res.end(endContent);
});

// 监听端口
server.listen(80, () => {
    console.log('http:127.0.0.1')
})