export const  getDate = (date) => {
    const ms = Date.parse(date)
    let newDate = new Date(ms)
    return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`
}