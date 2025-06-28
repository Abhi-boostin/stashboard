# Stashboard

Stashboard is a full-stack inventory management web application. It allows users to register, log in, and manage inventory items with a modern, responsive dashboard.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend](#backend-setup)
  - [Frontend](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features
- User registration, login, and authentication (with OTP verification)
- Secure password hashing and JWT-based sessions
- Add, edit, delete, and view inventory items
- Dashboard with item statistics (total items, total quantity, low stock)
- Responsive UI with sidebar navigation
- Profile management
- Email notifications (for OTP)
- Modern UI with Tailwind CSS

---

## Tech Stack
- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs, OTP via email (nodemailer)
- **Other:** dotenv, express-validator, morgan

---

## Project Structure
```
stashboard/
  ├── Backend/
  │   ├── config/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  │   ├── index.js
  │   ├── package.json
  │   └── ...
  ├── Frontend/
  │   ├── src/
  │   ├── index.html
  │   ├── package.json
  │   └── ...
  └── README.md
```

---

## Setup Instructions

### Backend Setup
1. **Navigate to the Backend directory:**
   ```bash
   cd Backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create a `.env` file in the `Backend/` directory:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```
4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000) by default.

---

### Frontend Setup
1. **Navigate to the Frontend directory:**
   ```bash
   cd Frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Environment Variables

### Backend `.env` Example
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Frontend
No special environment variables are required by default. If you use a custom backend URL, set it in your API service file.

---

## Usage
1. Register a new user with your email address.
2. Verify your email using the OTP sent to your inbox.
3. Log in to access the dashboard.
4. Add, edit, or delete inventory items.
5. View statistics and manage your profile.

---

## Screenshots
Add screenshots of the dashboard, login, and item management screens here.

---

## License
This project is licensed under the MIT License. 