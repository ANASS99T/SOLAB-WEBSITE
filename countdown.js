

var count = new Date("jul 20,2020 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("days1").innerHTML = days;
    document.getElementById("hours1").innerHTML = hours;
    document.getElementById("minutes1").innerHTML = minutes;
    document.getElementById("seconds1").innerHTML = seconds;

    if (d <= 0) {
        clearInterval(x);
    }
}, 1000);
// Part add name of members
