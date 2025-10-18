// // node提供的exports对象
// console.log(exports);

// console.log(module.exports)
// // 指向同一个对象,最终共享结果，还是以module.exports为准
// console.log(exports === module.exports) // true

// 以module.exports为准，可以直接修改module.exports的值，会影响到exports对象
module.exports = {
    username: "小猫",
}


exports.name="小猫"
exports.age = 19

exports = {
    username: "小猪"

}
