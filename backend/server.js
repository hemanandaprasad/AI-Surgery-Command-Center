const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 MONGODB CONNECTION
mongoose.connect("YOUR_MONGODB_URL")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// SCHEMA
const Patient = mongoose.model("Patient", {
  name: String,
  age: Number,
  condition: String,
  diagnosis: String,
  status: String
});

// 🔥 ADD PATIENT
app.post("/add", async (req, res) => {
  const { name, age, condition } = req.body;

  let diagnosis = "Stable";
  let status = "Normal";

  if (condition.toLowerCase().includes("bleeding")) {
    diagnosis = "Internal bleeding detected";
    status = "Critical";
  }

  const patient = new Patient({ name, age, condition, diagnosis, status });
  await patient.save();

  res.json(patient);
});

// 🔥 GET ALL DATA
app.get("/all", async (req, res) => {
  const data = await Patient.find();
  res.json(data);
});

// START SERVER
app.listen(3000, () => console.log("Server running on port 3000"));