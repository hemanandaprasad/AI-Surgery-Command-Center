// Countdown timer
let time = 600; // 10 minutes

setInterval(function(){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    if(seconds<10) seconds = "0"+seconds;
    document.getElementById("timer").innerText = minutes + ":" + seconds;
    time--;
},1000);

// AI Diagnosis simulation
setTimeout(function(){
    document.getElementById("diagnosis").innerText = "AI Diagnosis: Internal bleeding detected. Immediate surgery required.";
},3000);