const path = require('path')
const newPath = '/a/a/c/index.html' 

// 1、路径 2、后缀名  添加后缀名，则会去掉后缀名
const fullName= path.basename(newPath, '.html')

console.log(fullName) // output: index.html