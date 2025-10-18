// 引用自定义模块， 在外界使用require导入一个自定义模块的时候，得到的成员就是在 那个模块
// 中，通过module.exports指向的对象。
// 注意：在使用require加载自定义模块期间，可以省略 .js 后缀名
const deom = require('./demoComponent.js')
// console.log(module)

console.log(deom)