function remove(str,char_pos){
    x = str.substring(0,char_pos)
    y = str.substring(char_pos+1,str.length)
    return x+y
}

console.log(remove("pradeep",3))
console.log(remove("Pradeep",0))