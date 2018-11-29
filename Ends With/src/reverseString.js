module.exports = function reverseString(dict){
    let reversed = [];
    Object.keys(dict).map(key => {
        reversed.push(dict[key].reverse().join(""))
        return
    })
    return reversed
}

