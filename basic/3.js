var today = new Date();

var date = today.getDate();
var month = today.getMonth()
var year = today.getFullYear()

if(date<10){
    date = '0'+date
}
if(month<10){
    month ='0'+month
}

console.log(date+'-'+month+'-'+year)
console.log(date+'/'+month+'/'+year)
console.log(month+'-'+date+'-'+year)
console.log(month+'/'+date+'/'+year)
