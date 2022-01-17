module.exports = function reverse (n) {
    let strNumber = String(Math.abs(n));
    let result = '';
    for (let i = 0; i < strNumber.length; i++) {
        result = strNumber[i] + result;
    }
    return Number(result);
};

