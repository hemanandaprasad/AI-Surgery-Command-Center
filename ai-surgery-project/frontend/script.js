// SUBMIT FORM
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

  alert("Patient added!");
});

// 🔥 AUTO FETCH LATEST DATA EVERY 3 SECONDS
async function loadLatest() {
  const res = await fetch("https://YOUR-RENDER-URL.onrender.com/all");
  const data = await res.json();

  if (data.length > 0) {
    const latest = data[data.length - 1];

    document.querySelector(".patient-name").innerText = latest.name;
    document.querySelector(".status").innerText = latest.status;
    document.querySelector(".diagnosis").innerText = latest.diagnosis;
  }
}

// Run every 3 sec
setInterval(loadLatest, 3000);

// Load once immediately
loadLatest();