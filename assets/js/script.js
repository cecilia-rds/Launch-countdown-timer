let dataFinal = new Date("dec 31, 2023 23:59:59").getTime();

let now = new Date().getTime();
let date = dataFinal - now;
let day = Math.floor(date / (1000 * 60 * 60 * 24));
let hours = Math.floor ((date%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor ((date%(1000 * 60 * 60))/(1000 * 60));
let seconds = Math.floor ((date%(1000 * 60))/1000);

