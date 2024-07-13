# Production Management System

## Overview

This project is built using the MERN stack (MongoDB, Express, React, Node.js), additionally it include a set of APIs to handle CRUD operation on work instruction given to employees using firebase and multer. The dashboard provides various administrative functionalities, including employee management, data visualization, and transaction monitoring.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Admin authentication and authorization
- Role-based access control
- Dynamic data visualization with charts and graphs
- Real-time updates
- Responsive design for mobile and desktop views
- CRUD operations for managing employees and transactions data

## Technologies

- **Frontend:** React, Redux, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Styling:** CSS, Bootstrap, Material-UI
- **Authentication:** Passport
- **Testing:** Jest, Enzyme

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud-based)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mavidishu/Production_Management_System_DIXON.git
   cd Production_Management_System_DIXON
   ```
2. **Install Dependencies**
   - For the backend
     ```sh
     cd backend
     npm install
     ```
3. **Set up environment variables**
   Create a '.env' file in root directory and add the following variables:

   ```sh
   MONGO_URI=your_mongodb_uri
   API_KEY=your_api_key
   ```
4. **Run the application**
   - Start backend server
  
     ```sh
     cd backend
     nodemon index.js
     ```

   - Start frontend server
  
     ```sh
     cd..
     npm run dev
     ```
## Usage
  - Login: Use the credentials provided in the database or register or create a new account.
  - Dashboard: Access different sections of the dashboard using the production section.
  - Employee Management: Add, update, delete, and view users.
  - Data Visualization: View charts and graphs representing various metrics.

## Project Structure

```sh
admin-dashboard/
│
├── backend/
|   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   |── server.js
|   |__ db.mjs
|   |__ index.mjs
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
│
├── README.md
└── package.json
```
