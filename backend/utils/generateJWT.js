import jwt from "jsonwebtoken";

// Function to generate a JWT token and set it as a cookie in the response
const generateTokenAndSetCookies = (userId, res) => {
    // Generate a JWT token using the userId and the JWT_SECRET from environment variables
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token expires in 30 days
    });

    // Set the JWT token as a cookie in the response
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expires in 15 days (milliseconds)
        httpOnly: true, // Cookie is accessible only via HTTP(S) and not by JavaScript
        sameSite: 'strict', // Cookie is not sent in cross-origin requests (CSRF protection)
        secure: process.env.NODE_ENV !== "development", // Cookie is sent only over HTTPS in non-development environments
    });
};


export default generateTokenAndSetCookies;
