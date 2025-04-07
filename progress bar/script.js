// // Progress bar animation
//  var prg = document.querySelector("#progress");
//  var h3 = document.querySelector("h3");
//  var start = document.querySelector("#start");
//  var stop = document.querySelector("#stop");
//  var h3 = document.querySelector("h3");

//  var count=0;
//  start.addEventListener("click",function(){
//     var interval = setInterval(function(){
//         if(count===100){
//             clearInterval(interval);
//             h3.innerText="Download completed successfully";
//             h3.style.opacity=1;
//         }
//         count++;
//         prg.style.width=count+"%";
//     },100);
//     h3.innerText="Downloading...";
    
// },

// );
// stop.addEventListener("click", function () {
//     clearInterval(interval);
//     count = 0;
//     h3.style.opacity = 0;
// });
// Progress bar animation
var prg = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var count = 0;
var interval = null;

start.addEventListener("click", function () {
    // Prevent multiple intervals
    if (interval) return;

    interval = setInterval(function () {
        if (count >= 100) {
            clearInterval(interval);
            interval = null;
            h3.style.opacity = 1;
            h3.innerText = "Download completed successfully";
            return;
        }
        count++;
        prg.style.width = count + "%";
    }, 100);
    h3.innerText = "Downloading...";
});

stop.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    prg.style.width = "0%";
    count = 0;
    // h3.style.opacity = 0;
    h3.innerText = "Download stopped";
});
