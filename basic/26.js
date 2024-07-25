function front_back(str){
    x = str.substring(str.length-3,str.length)
    return (x + str + x)
}

console.log(front_back("swift"))
console.log(front_back("abc"))
console.log(front_back("ab"))
console.log(front_back("abcd"))
