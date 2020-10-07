module.exports = function reverse (n) {
    let res = /[0-9]/g;
    let num = n.toString().match(res).reverse()
    num.forEach((item, index) => {
        if (item === '0' && index === 0) {
            num.splice(0, 1)
        }
    })
    num = Number(num.join(''));
    
    return num;
}
