// Example dynamic data
const data = {
    activeSurgeries: 8,
    criticalPatients: 3,
    scheduledSurgeries: 12,
    performanceAnalytics: "AI efficiency: 95%",
    alerts: [
        { message: "Patient Hemananda has critical internal bleeding detected in OR 3.", time: "2 min ago" },
        { message: "High-risk anesthesia level detected for Patient Akhil in OR 1.", time: "5 min ago" },
        { message: "AI recommends urgent blood transfusion for Patient Geetha.", time: "10 min ago" }
    ]
};

// Load data into dashboard
document.getElementById('activeSurgeries').textContent = data.activeSurgeries;
document.getElementById('criticalPatients').textContent = data.criticalPatients;
document.getElementById('scheduledSurgeries').textContent = data.scheduledSurgeries;
document.getElementById('performanceAnalytics').textContent = data.performanceAnalytics;

// Load alerts
const alertsContainer = document.getElementById('alertsContainer');
data.alerts.forEach(alert => {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.innerHTML = `<i class="fas fa-exclamation-triangle"></i><p>${alert.message}</p><span>${alert.time}</span>`;
    alertsContainer.appendChild(div);
});

// Hero button interaction
document.getElementById('getStartedBtn').addEventListener('click', () => {
    alert("Welcome to AI Surgery Command Center! Redirecting to dashboard...");
});