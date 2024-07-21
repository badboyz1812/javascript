let str = "String";

function rotatestring(){
    str = str[str.length-1]+str.substring(0,str.length-1);
    document.getElementById("RS").textContent=str;
}

setInterval(rotatestring, 100);