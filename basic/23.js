function first_last(str){
    if(str<=1){
        return str;
    }
    mid_str = str.substring(1,str.length-1)

    return(str.charAt(str.length-1)+mid_str+str.charAt(0))

}


console.log(first_last("Rocky"))
console.log(first_last("    ."))