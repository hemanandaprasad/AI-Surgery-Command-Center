const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API for dashboard data
app.get('/api/dashboard', (req, res) => {
    res.json({
        activeSurgeries: 8,
        criticalPatients: 3,
        scheduledSurgeries: 12,
        performanceAnalytics: "AI efficiency: 95%"
    });
});

// Sample API for alerts
app.get('/api/alerts', (req, res) => {
    res.json([
        { message: "Patient Hemananda has critical internal bleeding detected in OR 3.", time: "2 min ago" },
        { message: "High-risk anesthesia level detected for Patient Ramesh in OR 1.", time: "5 min ago" },
        { message: "AI recommends urgent blood transfusion for Patient Sneha.", time: "10 min ago" }
    ]);
});

app.listen(port, () => {
    console.log(`AI Surgery Command Center server running at http://localhost:${port}`);
});