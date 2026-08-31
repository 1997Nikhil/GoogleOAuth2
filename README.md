🔐 Google OAuth + JWT Authentication

A full-stack authentication system built with React.js, Node.js, Express.js, MongoDB, Google OAuth 2.0, and JWT.

This project demonstrates how to implement Google Sign-In with your own JWT-based authentication system using short-lived access tokens and refresh tokens.

🚀 Features
🔑 Google OAuth 2.0 Login
👤 Automatic user creation in MongoDB
🔐 JWT Access Token authentication
♻️ JWT Refresh Token authentication
🛡️ Protected backend routes
🍪 HttpOnly cookies for refresh tokens
⚛️ React frontend
🟢 Express.js REST API
🍃 MongoDB Atlas database
🔄 Automatic access-token refresh
🚪 Secure logout
🌐 CORS configuration
🔒 Environment variable based configuration
🛠️ Tech Stack
Frontend
React.js
React Router
Axios
JavaScript
Vite
Backend
Node.js
Express.js
Passport.js
Passport Google OAuth 2.0
JSON Web Token (JWT)
Cookie Parser
CORS
Database
MongoDB
MongoDB Atlas
Mongoose
Authentication
Google OAuth 2.0
JWT Access Token
JWT Refresh Token
HttpOnly Cookies
📁 Project Structure
google-oauth-jwt/
│
├── backend/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── utils/
│   │   └── generateTokens.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   └── package.json
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── GoogleLoginButton.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── OAuthSuccess.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
└── README.md