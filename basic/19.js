function test(x){
    return((Math.abs(100-x)<=20 ||(Math.abs(400-x)<=20)))
}

console.log(test(399))
console.log(test(200))
console.log(test(10))