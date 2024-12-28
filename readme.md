# Role-Based Access Control (RBAC) API

This project is a robust **Role-Based Access Control (RBAC) system** built with Node.js, Express, and MongoDB. It provides a secure authentication and authorization mechanism, ensuring that users, moderators, and admins have appropriate access to resources based on their assigned roles. The system uses **JWT** (JSON Web Tokens) for session management and includes comprehensive error handling and validation.

## Key Features

- **User Authentication**: Secure login and registration with JWT-based token management (Access and Refresh tokens).
- **Role-Based Access**: Admin, Moderator, and User roles with different permissions.
- **Admin Role Management**: Admins can manage user roles and control access.
- **Session Management**: Refresh tokens to maintain sessions securely.
- **Input Validation & Error Handling**: Validations for user inputs and comprehensive error responses.
- **Optimized Codebase**: Clean, structured, and maintainable code for better performance.

## Project Structure

```
/src
├── controllers/ # Contains API logic for authentication and user management
├── middlewares/ # Middleware for authentication, authorization, and validation
├── models/ # MongoDB schemas for users and roles
├── routes/ # API route definitions
├── utils/ # Utility functions (error handling, input sanitization, etc.)
└── server.js # Main server entry point
```

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Deployment**: Render.com or other hosting services

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14+)
- **MongoDB** (Cloud-based)

### Installation

1. Clone the repository:
```
   git clone https://github.com/HP200421/VRV-Security-s-Assignment
   cd VRV-Security-s-Assignment
```

2. Install dependencies:

```
   npm install
```
3. Create a .env file and add the following environment variables:
```
   PORT=5000
   MONGODB_URI # Your mongodb uri
   CORS_ORIGIN # Allowed origin for CORS requests  
   ACCESS_TOKEN_SECRET # Secret key for signing Access Tokens  
   ACCESS_TOKEN_EXPIRY # Expiry duration for Access Tokens  
   REFRESH_TOKEN_SECRET # Secret key for signing Refresh Tokens  
   REFRESH_TOKEN_EXPIRY # Expiry duration for Refresh Tokens
```
4. Start the server:
```
   npm run dev
```
5. Start the server:
```
   http://localhost:8000
```
## Usage

- **Admins** can manage user roles (assign Admin, Moderator, or User roles).
- **Moderators** have access to user and moderator-level routes.
- **Users** can access only user-specific routes.

## Deployment

This project is already deployed on **Render.com**.

- Check the API functionality using the **Postman documentation**.
- Ensure environment variables are properly configured in the hosting environment.

## Additional Resources

I have included a detailed PDF guide below for further reference.
