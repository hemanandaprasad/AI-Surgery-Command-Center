CREATE DATABASE hospital;

USE hospital;

CREATE TABLE patients(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    condition_status VARCHAR(100)
);

CREATE TABLE surgery_cases(
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    surgery_type VARCHAR(100),
    status VARCHAR(100)
);

CREATE TABLE vital_signs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    heart_rate INT,
    blood_pressure VARCHAR(50)
);