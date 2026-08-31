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

🔄 Authentication Flow

The application uses Google OAuth to verify the user's identity and then creates its own JWT tokens.

                     ┌─────────────────┐
                     │      React      │
                     │    Frontend     │
                     └────────┬────────┘
                              │
                              │ Google Login
                              ▼
                     ┌─────────────────┐
                     │     Express     │
                     │     Backend     │
                     └────────┬────────┘
                              │
                              │ OAuth Request
                              ▼
                     ┌─────────────────┐
                     │     Google      │
                     │     OAuth 2.0   │
                     └────────┬────────┘
                              │
                              │ User Profile
                              ▼
                     ┌─────────────────┐
                     │     MongoDB     │
                     │      Atlas      │
                     └────────┬────────┘
                              │
                              │ User Found/Created
                              ▼
                     ┌─────────────────┐
                     │   JWT Tokens    │
                     │                 │
                     │ Access Token    │
                     │ Refresh Token  │
                     └────────┬────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │      React      │
                     │   Dashboard     │
                     └─────────────────┘
🔑 How Authentication Works
1. User clicks Google Login

React redirects the user to:

GET /api/auth/google
2. Backend redirects to Google

Passport.js starts the Google OAuth flow.

Google asks the user to select and authorize an account.

3. Google redirects back to the backend

Google redirects the user to:

GET /api/auth/google/callback
4. Backend receives Google profile

The backend receives information such as:

{
  "id": "google-user-id",
  "displayName": "User Name",
  "email": "user@gmail.com",
  "photo": "profile-image-url"
}
5. Find or create user

The backend checks MongoDB using the Google ID or email.

If the user doesn't exist:

Create User

If the user already exists:

Login Existing User
6. Generate JWT tokens

The backend generates:

Access Token
Expiration: 15 minutes

Used to access protected APIs.

Refresh Token
Expiration: 7 days

Stored in an HttpOnly cookie and used to generate a new access token.

🔐 Token Architecture
             Login
               │
               ▼
       ┌────────────────┐
       │ Access Token   │
       │   15 minutes   │
       └───────┬────────┘
               │
               │ API Requests
               ▼
          Protected API
               │
               ▼
          Token Expired
               │
               ▼
       ┌────────────────┐
       │ Refresh Token  │
       │    7 days      │
       │ HttpOnly Cookie│
       └───────┬────────┘
               │
               ▼
       Generate New
       Access Token
⚙️ Installation
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/google-oauth-jwt.git

Go into the project:

cd google-oauth-jwt
🖥️ Backend Setup

Go to the backend directory:

cd backend

Install dependencies:

npm install
🔐 Environment Variables

Create a .env file inside the backend directory.

PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

CLIENT_URL=http://localhost:5173
Example
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/googleoauth

JWT_ACCESS_SECRET=your_super_secret_access_key
JWT_REFRESH_SECRET=your_super_secret_refresh_key

GOOGLE_CLIENT_ID=123456789-example.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-example

GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

CLIENT_URL=http://localhost:5173

Never commit your .env file to GitHub.

☁️ MongoDB Atlas Setup

Create a MongoDB Atlas cluster and obtain your connection string.

Your connection string should look similar to:

mongodb+srv://username:password@cluster.mongodb.net/database

Put the connection string inside:

MONGO_URI=your_connection_string
🔵 Google OAuth Setup

Go to Google Cloud Console:

https://console.cloud.google.com/

Create a Google Cloud project.

Then go to:

APIs & Services
        ↓
Credentials
        ↓
Create Credentials
        ↓
OAuth Client ID

Select:

Application Type:
Web Application
Authorized JavaScript Origins

For local development:

http://localhost:5173
Authorized Redirect URIs

Add:

http://localhost:5000/api/auth/google/callback

Your configuration should therefore be:

Authorized JavaScript origins

http://localhost:5173

and:

Authorized redirect URIs

http://localhost:5000/api/auth/google/callback
▶️ Start Backend

Inside backend:

node app.js

Expected output:

MongoDB connected
Server running on port 5000
⚛️ Frontend Setup

Open another terminal.

Go to:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

React should start at:

http://localhost:5173
🧪 Testing Google Login

Open:

http://localhost:5173/login

Click:

Continue with Google

The authentication flow will be:

Login Page
     ↓
Google OAuth
     ↓
Google Account Selection
     ↓
Backend Callback
     ↓
MongoDB User
     ↓
JWT Access Token
     ↓
JWT Refresh Token
     ↓
Dashboard
🔒 Protected API

Protected routes require an access token.

Example:

GET /api/user/profile
Authorization: Bearer ACCESS_TOKEN

The backend verifies:

Authorization Header
        ↓
Extract Token
        ↓
jwt.verify()
        ↓
Valid?
   ↙         ↘
 Yes          No
  ↓            ↓
Continue      401
🚪 Logout Flow

Logout should:

React
  ↓
POST /api/auth/logout
  ↓
Backend
  ↓
Clear refresh-token cookie
  ↓
Remove access token
  ↓
Redirect to Login
🛡️ Security Considerations

This project follows several important authentication practices:

Google Client Secret is stored only on the backend.
Access tokens are short-lived.
Refresh tokens are stored in HttpOnly cookies.
Protected APIs validate JWTs.
Secrets are stored in environment variables.
CORS is restricted to the frontend origin.
Refresh tokens should not be exposed to client-side JavaScript.

For production, also enable:

secure: true

for cookies when using HTTPS.

📌 API Endpoints
Authentication
Method	Endpoint	Description
GET	/api/auth/google	Start Google OAuth
GET	/api/auth/google/callback	Google OAuth callback
POST	/api/auth/refresh	Generate new access token
POST	/api/auth/logout	Logout user
User
Method	Endpoint	Authentication
GET	/api/user/profile	JWT Required
🧰 Useful Commands
Backend
npm install
node app.js
Frontend
npm install
npm run dev
🐛 Common Errors
redirect_uri_mismatch

Check that Google Cloud Console contains exactly:

http://localhost:5000/api/auth/google/callback

The URL must match your backend callback URL.

ERR_CONNECTION_REFUSED

Make sure the backend is running:

node app.js

and that it is listening on:

http://localhost:5000
MongoDB connection error

Check:

MONGO_URI=...

Also make sure your IP address is allowed in MongoDB Atlas Network Access.

Google Client ID error

Check:

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

Make sure there are no unnecessary spaces or quotation marks.

📚 What I Learned From This Project

This project demonstrates:

OAuth 2.0
Google Authentication
Passport.js
JWT Authentication
Access Tokens
Refresh Tokens
HttpOnly Cookies
Protected Routes
React Authentication
Express Middleware
MongoDB User Management
CORS
REST APIs
Environment Variables
Authentication Security
🚀 Future Improvements

Possible improvements include:

Axios interceptors

Automatic access-token refresh

Better authentication context using React Context API

Protected React routes

Secure refresh-token rotation

Logout from all devices

Email/password authentication

Forgot password

Email verification

Role-based authorization

Production deployment

HTTPS configuration

Rate limiting

Helmet security middleware

👨‍💻 Author

Nikhil Dadhich

Full Stack Developer | MERN Stack | JavaScript

⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.