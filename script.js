// 1. Finding the daay and time of a week.

var date =  new Date();
var today = date.getDay();
var currentDate = date.toLocaleDateString();
var currentTime = date.toLocaleTimeString();
var currentDtaeAndTime = date.toLocaleString('en-us', { day: 'numeric', year: 'numeric', month:'long', weekday: 'long',   hour:'numeric', minute:'numeric'})
var card1view = document.getElementById('answerView1');
card1view.innerText = "The answer is: " + currentDtaeAndTime;




// if(today === 0){
//     console.log("Today is : Sunday" + "Date: " + currentDate + " Time:" + currentTime);
// }else if(today === 1){
   
//     console.log("Today is : Monday" + "Date: " + currentDate + " Time:" + currentTime);
// }
// else if(today === 2){
//     console.log("Today is : Tuesday " + "Date: " + currentDate + " Time:" + currentTime);
// }
// else if(today === 3){
//     console.log("Today is : Wednesday " + "Date: " + currentDate + " Time:" + currentTime);
// }
// else if(today === 4){
//     console.log("Today is : Thursday " + "Date: " + currentDate + " Time:" + currentTime);
// }

// else if(today === 5){
//     console.log("Today is : Friday " + "Date: " + currentDate + " Time:" + currentTime);
// }

// else{
//     console.log("Today is : Friday " + "Date: " + currentDate + " Time:" + currentTime);
// }


// 2.  Write a function to get sum of two number;

var addTowNumbers= function(a,b){
    return a+b;
}
const card1view2 = document.getElementById('answerView2');
card1view2.innerText = "The result is: " + addTowNumbers(10,20);

// 3. Return the Next Number from a passed the Integer number

var nextNumber = function(a){
    return a + 1 ;
}
const card1view3 = document.getElementById('answerView3');
card1view3.innerText = "The result is: " + nextNumber(10);