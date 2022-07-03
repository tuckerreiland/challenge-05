function displayTime() {
    var time2 = moment().format('MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').html(time2);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});

console.log("FUCK")