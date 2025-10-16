const fs = require('fs')
// 路径拼接尽量不使用相对路径，使用绝对路径更加安全。（避免出现动态拼接路径错误）
console.log(__dirname);   // 当前模块的目录路径
console.log(__filename);  // 当前模块的文件路径

fs.readFile(__dirname + '/filesTxt/成绩.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    let succesData = data.split(' ').map(item => {
        let list = item.split('=')
        return { 
            [list[0]]: parseInt(list[1])
        }
    })
    let newData = JSON.stringify(succesData)
    
    fs.writeFile(__dirname + '/filesTxt/新成绩.txt', newData, 'utf8', (err2)=>{
        if(err2){
            console.error(err2)
        }
        console.log('写入成功')
    })
})
