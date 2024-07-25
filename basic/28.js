function check(x,y){
    if((x>=50 && x<=99) || (y>=50 && y<= 99)){
        return true
    }else{
        return false
    }
}

console.log(check(52,80))
console.log(check(12,101))
console.log(check(15,99))