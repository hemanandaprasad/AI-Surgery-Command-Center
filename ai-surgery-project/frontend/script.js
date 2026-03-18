// 🔊 VOICE FUNCTION
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

// 🔥 SUBMIT FORM
document.getElementById("patientForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const condition = document.getElementById("condition").value;

  await fetch("https://YOUR-RENDER-URL.onrender.com/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, age, condition })
  });

  speak("Patient data recorded");
});

// 🔥 AI RISK LOGIC
function calculateRisk(condition) {
  condition = condition.toLowerCase();

  if (condition.includes("bleeding")) return 95;
  if (condition.includes("heart")) return 90;
  if (condition.includes("accident")) return 85;
  if (condition.includes("fracture")) return 60;
  if (condition.includes("fever")) return 30;

  return 10;
}

// 🔥 LOAD DATA
async function loadLatest() {
  const res = await fetch("https://YOUR-RENDER-URL.onrender.com/all");
  const data = await res.json();

  if (data.length > 0) {
    const latest = data[data.length - 1];

    document.querySelector(".patient-name").innerText = latest.name;
    document.querySelector(".status").innerText = latest.status;
    document.querySelector(".diagnosis").innerText = latest.diagnosis;

    const risk = calculateRisk(latest.condition);
    document.getElementById("riskBar").value = risk;
    document.getElementById("riskText").innerText = risk + "%";

    if (risk > 80) {
      speak("Critical condition detected");
    } else if (risk > 50) {
      speak("Patient needs attention");
    }
  }
}

// AUTO REFRESH
setInterval(loadLatest, 3000);
loadLatest();