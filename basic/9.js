// Get the current date
var today = new Date()

// Get the christmas date
var cms = new Date(today.getFullYear(), 11, 25)

if(today.getMonth() == 11 & today.getDate() > 25){
    cms.setFullYear(cms.getFullYear()+1)
}

var one_day = 1000*60*60*24;
console.log(Math.ceil((cms.getTime() - today.getTime())/(one_day))+"days left for christmas!")