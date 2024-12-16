# E-Library Management API

This is the backend API for the E-Library Management Application built with Node.js, Express, and MongoDB. The application allows users to manage books, borrow/return them, and handle user authentication with JWT tokens.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- dotenv
- nodemon

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mansigohil10/library-management-system.git

2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGODB_URI=your_mongo_db_connection_string
    PORT=5000
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRE=token expire time
    ```

4. Start the development server:

   ```bash
   npm start
   The server should now be running at http://localhost:5000
   ```

## Environment Variables
- PORT: The port for the server to listen on.
- MONGODB_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for signing JWT tokens.
- JWT_EXPIRE : token expire time.
