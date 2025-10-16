const path = require('path');
// 注意 ../ 会抵消前面的路径  join 会把路径拼接起来
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)
// console.log(path.join(__dirname, 'path1.js'))

console.log(__dirname, '----------')
const fs = require('fs')
fs.readFile(path.join(__dirname, '../', '/files/filesTxt/2.txt'), 'utf8', (err, data) => {
    if (err) { 
        return console.error(err)
    }
    console.log(data)
})