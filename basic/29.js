function check(x,y,z){
    if((x>=50 && x<=99)||(y>=50 && y<=99)||(z>=50 && z<=99)){
        return true
    }else{
        return false
    }
}

console.log(check(65,89,199))