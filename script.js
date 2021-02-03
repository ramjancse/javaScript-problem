// 1. Finding the daay and time of a week.

var date =  new Date();
var today = date.getDay();
var currentTime = date.toLocaleTimeString();
var currentDate = date.toLocaleDateString();



if(today === 0){
    console.log("Today is : Sunday" + "Date: " + currentDate + " Time:" + currentTime);
}else if(today === 1){
   
    console.log("Today is : Monday" + "Date: " + currentDate + " Time:" + currentTime);
}
else if(today === 2){
    console.log("Today is : Tuesday " + "Date: " + currentDate + " Time:" + currentTime);
}
else if(today === 3){
    console.log("Today is : Wednesday " + "Date: " + currentDate + " Time:" + currentTime);
}
else if(today === 4){
    console.log("Today is : Thursday " + "Date: " + currentDate + " Time:" + currentTime);
}

else if(today === 5){
    console.log("Today is : Friday " + "Date: " + currentDate + " Time:" + currentTime);
}

else{
    console.log("Today is : Friday " + "Date: " + currentDate + " Time:" + currentTime);
}
