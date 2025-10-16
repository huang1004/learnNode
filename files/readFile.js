// 导入fs模块
const fs = require('fs')
// 读取文件 
// 参数1 文件路径 参数2 读取文件是采用的格式，默认utf7 参数3 回调函数
fs.readFile('./入参.txt', 'utf8', (err, dataStr) => {
    // 如果读取成功返回 null
    // 如果读取失败返回错误信息，dataStr返回undefined
    // console.log(err)
    // console.log('--------')
    // console.log(dataStr)

    // 判断文件是否读取成功
    if (err) {
       return console.log('读取失败：' + err.message)
    } else {
        // 打印文件内容
        console.log('文件内容：' + dataStr)
    }
})