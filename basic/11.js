function ctof(celsius){
    var ctemp = celsius

    var ctofar = ctemp * 9/5 + 32
    var message = ctemp + '\xB0C is ' + ctofar + '\xB0F .';
    console.log(message)
}
 
function ftoc(fahrenheit){
    var ftemp = fahrenheit

    var ftocel = (ftemp - 32)*5/9
    var message = ftemp +'\xB0F is '+ ftocel +'\xB0C .'
    console.log(message)
}

ctof(20)
ftoc(20)