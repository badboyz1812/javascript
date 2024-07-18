//JS program to display the current date and time in specific format
var today= new Date();
var day = today.getDay();
var daylist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log("Today is: "+daylist[day]+".");

var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();

//Determine whether it is PM or AM
var prepand = (hour>=12) ? "PM" : "AM"
console.log(prepand)
//convert it into 12hr format
hour = (hour>=12) ? hour-12: hour

//check for special character when hour is 0
if(hour == 0 && prepand =='PM'){
    if(minute == 0 && seconds == 0){
        hour = 12;
        prepand = 'Noon';
    }else{
        hour = 12;
        prepand = 'PM';
    }
}

if(hour == 0 && prepand == "AM"){
    if(minute == 0 && seconds == 0){
        hour = 12;
        prepand = "Midnight"
    }else{
        hour = 12;
        prepand = 'AM';
    }
}
console.log("Current Time: "+hour+":"+minute+":" + seconds +prepand);
