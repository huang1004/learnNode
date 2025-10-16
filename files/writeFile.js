// 引入文件模块
const fs = require('fs')
// 1、文件的存放路径 2、写入的内容 （默认参数写入格式utf8）3、回调函数
fs.writeFile('./filesTxt/2.txt', '这里是写入的内容2', (err) => {
    // 如果成功结果为null,如果文件没有会创建一个文件
    // 如果失败返回错误对象
    // console.log(err)

    if (err) {
        return console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})