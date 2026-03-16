// AI Diagnosis simulation

const diagnoses = [
"Internal bleeding detected",
"Heart rate abnormal",
"Oxygen level dropping",
"AI recommends blood transfusion"
];

let index = 0;

setInterval(function(){

document.getElementById("diagnosis").innerText =
diagnoses[index];

index++;

if(index >= diagnoses.length){
index = 0;
}

},3000);


// Surgery countdown timer

let time = 600;

setInterval(function(){

let minutes = Math.floor(time/60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerText =
minutes + ":" + seconds;

if(time > 0){
time--;
}

},1000);


// AI efficiency simulation

let efficiency = 95;

setInterval(function(){

efficiency = 90 + Math.random()*10;

document.getElementById("efficiency").innerText =
efficiency.toFixed(1) + "%";

},2000);


// Alerts simulation

const alerts = [
"Patient Hemananda internal bleeding detected",
"Patient Akhil anesthesia risk high",
"AI suggests urgent surgery",
"Blood pressure dropping rapidly"
];

setInterval(function(){

let alertBox = document.getElementById("alerts");

let newAlert = document.createElement("p");

newAlert.innerText =
alerts[Math.floor(Math.random()*alerts.length)] +
" - " + new Date().toLocaleTimeString();

alertBox.prepend(newAlert);

},4000);


// ICU Vitals Graph using Chart.js

const ctx = document.getElementById('vitalsChart').getContext('2d');

let vitalsChart = new Chart(ctx,{
type:'line',

data:{
labels:["1","2","3","4","5","6","7","8","9","10"],

datasets:[{
label:"Heart Rate",

data:[72,75,73,76,74,77,78,76,75,74],

borderColor:"#00ffcc",

borderWidth:2,

fill:false,

tension:0.4
}]
},

options:{
responsive:true,

plugins:{
legend:{
labels:{
color:"white"
}
}
},

scales:{
x:{
ticks:{
color:"white"
}
},

y:{
ticks:{
color:"white"
}
}
}
}
});


// simulate live heart rate updates

setInterval(function(){

let newRate = 70 + Math.random()*15;

vitalsChart.data.datasets[0].data.push(newRate);

vitalsChart.data.datasets[0].data.shift();

vitalsChart.update();

},2000);