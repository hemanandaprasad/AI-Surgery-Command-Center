# AI Emergency Surgery Command Center

## Overview
This project is a **single-page full-stack web application** simulating a futuristic hospital dashboard where doctors can monitor critical surgeries in real-time. The interface includes patient case files, AI diagnosis simulation, an ECG heartbeat monitor, and a surgery countdown timer.

## Folder Structure
```

ai-surgery-project
├ frontend      → HTML, CSS, JavaScript files for the dashboard
├ backend       → Node.js server for API and serving frontend
├ database      → SQL scripts for MySQL database
├ node_modules  → Node dependencies
├ package.json  → Node project metadata
└ README.md     → Project documentation

````

## Features
- **Emergency alert screen**  
- **Patient case file panel**  
- **AI diagnosis simulation**  
- **Animated ECG monitor**  
- **Surgery countdown timer**  
- **Responsive single-page layout**  

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js with Express  
- **Database:** MySQL  
- **Version Control:** Git & GitHub  
- **Deployment:** Free hosting (frontend) or Render/Glitch (backend)  

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/hemanandaprasad/ai-surgery-command-center.git
cd ai-surgery-project
````

2. Install Node.js dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
node backend/server.js
```

4. Open your browser at:

```
http://localhost:3000
```

5. Optional: Import database schema:

```bash
mysql -u root -p < database/schema.sql
```

## Usage

* Frontend displays patient details, AI diagnosis, ECG monitor, and surgery timer.
* Backend serves the frontend files and API endpoints (`/api/status`) and can connect to MySQL for patient data.

## Notes

* The project demonstrates a **modern full-stack workflow**: frontend, backend, database, version control, and deployment.
* GitHub Actions or other CI/CD pipelines can be added to automate testing and deployment.

## Author

**Hemananda Prasad **
