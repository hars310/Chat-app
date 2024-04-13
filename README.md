# Authentication Controllers (Signup, Login, Logout)

## Overview

The authentication controllers are responsible for handling user authentication processes such as signup, login, and logout. These controllers interact with the user model to create, retrieve, update, or delete user information.

## Signup Controller

### Process

1. **Input Data**:
   - Retrieve user input data (fullname, username, password, confirmPassword, gender) from the request body.

2. **Password Check**:
   - Compare the `password` and `confirmPassword` fields. If they do not match, return a 400 error response indicating that the passwords do not match.

3. **Username Check**:
   - Check if the `username` already exists in the database. If it does, return a 400 error response indicating that the user already exists.

4. **Hash Password**:
   - Generate a salt using bcryptjs with a complexity of 10.
   - Hash the `password` using the generated salt.

5. **Profile Picture URL**:
   - Generate a profile picture URL based on the `username` and `gender` of the user.

6. **Create User**:
   - Create a new user document in the database using the `User.create` method, with the following fields:
     - `fullname`
     - `username`
     - `gender`
     - `password` (hashed password)
     - `profilePic` (generated profile picture URL)

7. **Response**:
   - If the user is successfully created, return a 201 status code with the user's `_id`, `fullname`, `username`, and `profilePic` in the response body.
   - If any error occurs during the process, catch the error and return a 500 status code with the error message.

8. **Error Handling**:
   - If any error occurs during the signup process (e.g., validation error, database error), catch the error and return a 500 status code with the error message.

## Login Controller

## Process

1. **Input Data**:
   - Retrieve user input data (username, password) from the request body.

2. **Find User**:
   - Find the user in the database using the `username`.

3. **Password Check**:
   - Compare the provided `password` with the hashed password stored in the database using `bcryptjs.compare`.

4. **Generate JWT Token**:
   - If the password is correct, generate a JWT token using the `generateTokenAndSetCookies` function and set it in the response cookies.

5. **Response**:
   - If the login is successful, return a 200 status code with the user's `_id`, `fullname`, `username`, and `profilePic` in the response body.
   - If the login credentials are invalid, return a 400 status code with an error message indicating invalid credentials.

6. **Error Handling**:
   - If any error occurs during the login process (e.g., user not found, incorrect password), catch the error and return a 500 status code with the error message.

## Logout Controller

### Process

1. **Clear JWT Token**:
   - Clear the JWT token from the response cookies to log the user out.

2. **Response**:
   - Send a response indicating that the user has been logged out.

3. **Error Handling**:
   - If any error occurs during the logout process, catch the error and return a 500 status code with the error message.
