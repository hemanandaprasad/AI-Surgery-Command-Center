-- Database for AI Surgery Command Center

CREATE DATABASE IF NOT EXISTS ai_surgery;
USE ai_surgery;

-- Patients table
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    department VARCHAR(50),
    status VARCHAR(50),
    surgery_scheduled DATETIME,
    critical_alert BOOLEAN DEFAULT FALSE
);

-- Surgeries table
CREATE TABLE surgeries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    department VARCHAR(50),
    surgery_type VARCHAR(100),
    start_time DATETIME,
    end_time DATETIME,
    status VARCHAR(50),
    FOREIGN KEY(patient_id) REFERENCES patients(id)
);

-- Alerts table
CREATE TABLE alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    message VARCHAR(255),
    alert_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    resolved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(patient_id) REFERENCES patients(id)
);