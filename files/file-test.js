const fs = require('fs')

fs.readFile('./filesTxt/成绩.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let succesData = []

    succesData = data.split(' ').map(item => {
        let list = item.split('=')
        return { 
            [list[0]]: parseInt(list[1])
        }
    })
    let newData = JSON.stringify(succesData)
    
    fs.writeFile('./filesTxt/新成绩.txt', newData, 'utf8', (err2)=>{
        if(err2){
            console.error(err2)
        }
        console.log('写入成功')
    })
})
