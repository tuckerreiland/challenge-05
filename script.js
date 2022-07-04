var todo9= document.querySelector("#nine");
var todo10= document.querySelector("#ten");
var todo11= document.querySelector("#eleven");
var todo12= document.querySelector("#twelve");
var todo13= document.querySelector("#thirteen");
var todo14= document.querySelector("#fourteen");
var todo15= document.querySelector("#fifteen");
var todo16= document.querySelector("#sixteen");


function displayTime() {
    var time2 = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html(time2);
    setTimeout(displayTime, 1000); 
}

$(document).ready(function() {
    displayTime();
});

//Change textarea background color based on time
var checkTime = function () {
    var currentTime = moment().format('H');
    if (9 < currentTime) {
        $(todo9).addClass("past");
    } else if (9 > currentTime) {
        $(todo9).addClass("future");
    } else {
        $(todo9).addClass("present");
    }
    if (10 < currentTime) {
        $(todo10).addClass("past");
    } else if (10 > currentTime) {
        $(todo10).addClass("future");
    } else {
        $(todo10).addClass("present");
    }
    if (11 < currentTime) {
        $(todo11).addClass("past");
    } else if (11 > currentTime) {
        $(todo11).addClass("future");
    } else {
        $(todo11).addClass("present");
    }
    if (12 < currentTime) {
        $(todo12).addClass("past");
    } else if (12 > currentTime) {
        $(todo12).addClass("future");
    } else {
        $(todo12).addClass("present");
    }
    if (13 < currentTime) {
        $(todo13).addClass("past");
    } else if (13 > currentTime) {
        $(todo13).addClass("future");
    } else {
        $(todo13).addClass("present");
    }
    if (14 < currentTime) {
        $(todo14).addClass("past");
    } else if (14 > currentTime) {
        $(todo14).addClass("future");
    } else {
        $(todo14).addClass("present");
    }
    if (15 < currentTime) {
        $(todo15).addClass("past");
    } else if (15 > currentTime) {
        $(todo15).addClass("future");
    } else {
        $(todo15).addClass("present");
    }
    if (16 < currentTime) {
        $(todo16).addClass("past");
    } else if (16 > currentTime) {
        $(todo16).addClass("future");
    } else {
        $(todo16).addClass("present");
    }
}
setInterval(checkTime(), (1000));

//functions for saving/displaying textarea content
$(document).ready(function() {
    display9();
});
$(document).ready(function() {
    display10();
});
$(document).ready(function() {
    display11();
});
$(document).ready(function() {
    display12();
});
$(document).ready(function() {
    display13();
});
$(document).ready(function() {
    display14();
});
$(document).ready(function() {
    display15();
});
$(document).ready(function() {
    display16();
});


function store9(){
    window.localStorage.setItem("#nine", todo9.value);
   }
function display9(){
   var display9 = window.localStorage.getItem("#nine")
   todo9.textContent = display9
   console.log (display9)
}

function store10(){
    window.localStorage.setItem("#ten", todo10.value);
   }
function display10(){
   var display10 = window.localStorage.getItem("#ten")
   todo10.textContent = display10
   console.log (display10)
}

function store11(){
    window.localStorage.setItem("#eleven", todo11.value);
   }
function display11(){
   var display11 = window.localStorage.getItem("#eleven")
   todo11.textContent = display11
   console.log (display11)
}

function store12(){
    window.localStorage.setItem("#twelve", todo12.value);
   }
function display12(){
   var display12 = window.localStorage.getItem("#twelve")
   todo12.textContent = display12
   console.log (display12)
}

function store13(){
    window.localStorage.setItem("#thirteen", todo13.value);
   }
function display13(){
   var display13 = window.localStorage.getItem("#thirteen")
   todo13.textContent = display13
   console.log (display13)
}

function store14(){
    window.localStorage.setItem("#fourteen", todo14.value);
   }
function display14(){
   var display14 = window.localStorage.getItem("#fourteen")
   todo14.textContent = display14
   console.log (display14)
}

function store15(){
    window.localStorage.setItem("#fifteen", todo15.value);
   }
function display15(){
   var display15 = window.localStorage.getItem("#fifteen")
   todo15.textContent = display15
   console.log (display15)
}

function store16(){
    window.localStorage.setItem("#sixteen", todo16.value);
   }
function display16(){
   var display16 = window.localStorage.getItem("#sixteen")
   todo16.textContent = display16
   console.log (display16)
}

