const fs = require('fs')

const path = require('path')


let changeHtml = {
    style: '',
    html: '',
    script: ''
}

const styleReg = /<style>(.*?)<\/style>/gs;
const scriptReg = /<script>(.*?)<\/script>/gs;

fs.readFile(path.join(__dirname, '/clock.html'), 'utf8', (err, data) => {
    if (err) { 
        return console.log(err)
    }
    readNewFile(data)
    // console.log(changeHtml)
})

const readNewFile = (data) => {
    let styleContent = []
    let scriptContent = []
    while ((styleContent = styleReg.exec(data)) !== null) {
        changeHtml.style = styleContent[1];
    }

    while ((scriptContent = scriptReg.exec(data)) !== null) {
        changeHtml.script = scriptContent[1];
    }

    fs.writeFile(path.join(__dirname, '/style-clock.css'), changeHtml.style, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('写入style-clock.css成功')
    })

    fs.writeFile(path.join(__dirname, '/script-clock.js'), changeHtml.script, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('写入script-clock.js成功')
    })

    changeHtml.html = data.replace(styleReg, `<link rel="stylesheet" href="./style-clock.css">`).replace(scriptReg, `<script src="./script-clock.js"></script>`)

    fs.writeFile(path.join(__dirname, '/html-clock.html'), changeHtml.html, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('写入html-clock.html成功')
    })
}