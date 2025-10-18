// 默认module.exports是个空对象，将模块内的成员共享出去

//测试自定义模块
console.log('自定义模块')

module.exports.age = '10岁'

module.exports.getName = function(){}

// 让 module.exports 指向一个新对象
module.exports = {
    name: '小明',
    sayHello: function(){
        console.log('hello')
    }
}