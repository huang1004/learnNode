const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('RUNOOB node test ~hello, node.js!\n')
});

const port = 3000
server.listen(port , () => {
    console.log(`服务器运行地址：http://localhost:${port}/`)
})


//  定时器函数，用于将回调函数推迟到当前事件循环的下一个阶段执行。
setTimeout(() => {
    console.log('定时器测试')
}, 0)

//  定时器函数，用于将回调函数推迟到当前时间循环的check阶段执行。 用于将回调函数推迟到下一个 I/O 事件循环阶段执行。
setImmediate(() => {
    console.log('setImmediate测试')
})

// 比setImmediate、setTimeout函数优先级高，用于当前操作结束后（当前事件循环的末尾）立即执行回调函数。
process.nextTick(() => {
  console.log('nextTick 2');
});

setImmediate(() => {
    console.log('setImmediate测试2222')
})