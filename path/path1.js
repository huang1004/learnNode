const path = require('path');
// 注意 ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr)
// console.log(path.join(__dirname, 'path1.js'))