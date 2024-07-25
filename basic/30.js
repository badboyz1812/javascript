function check(str){
    x = str.substring(4,str.length)
    if(x == "script"){
        return true
    }else{
        return false
    }
}


console.log(check("Javascript"))