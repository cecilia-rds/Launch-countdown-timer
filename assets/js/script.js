let endDate = new Date("dec 31, 2023 23:59:59").getTime();
var interval = setInterval(function() {

    let now = new Date().getTime();
    let date = endDate - now;
    let days = Math.floor(date / (1000 * 60 * 60 * 24));
    let hours = Math.floor ((date%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor ((date%(1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor ((date%(1000 * 60))/1000);

    document.querySelector(".days").innerHTML =days;
    document.querySelector(".hours").innerHTML =hours;
    document.querySelector(".minutes").innerHTML =minutes;
    document.querySelector(".seconds").innerHTML =seconds;

        if (days<=0 && hours<=0 && minutes<=0 && seconds<=0) {
            clearInterval(interval);
            document.querySelector(".days").innerHTML ='00';
            document.querySelector(".hours").innerHTML ='00';
            document.querySelector(".minutes").innerHTML ='00';
            document.querySelector(".seconds").innerHTML ='00';
           
        }

}, 1000);

