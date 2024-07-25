function test(x,y){
    return(x == 50||y==50||(x+y)==50)
}
console.log(test(50,50))
console.log(test(20,20))
console.log(test(25,50))
console.log(test(25,25))