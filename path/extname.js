const path = require('path')
const newPath = '/a/a/c/index.html' 

// 获取文件扩展名
const fext= path.extname(newPath)

console.log(fext) // output: index.html