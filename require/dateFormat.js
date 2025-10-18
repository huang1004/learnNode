function dateFormat(date) {
    const dt = new Date(date)

    const y = dt.getFullYear()
    const m = dt.getMonth() + 1
    const d = dt.getDate()



    const fullDate = `${y} : ${setTime(m)} : ${setTime(d)}`
    return fullDate
}

function setTime(date) {
    const newDate = date < 10 ? `0${date}` : date

    return newDate
}

module.exports = {
    dateFormat
}