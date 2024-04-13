import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Middleware function to protect routes by checking for a valid JWT token
const protectRoute = async (req, res, next) => {
  try {
    // Get JWT token from request cookies
    const token = req.cookies.jwt;
    
    // Check if token exists
    if (!token) {
      return res
        .status(401)
        .json({ error: "unauthorised - no token provided " });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if token is valid
    if (!decoded) {
      return res.status(401).json({ error: "unauthorised - invalid token " });
    }

    // Find user in database by user ID from decoded token, exclude password field
    const user = await User.findById(decoded.userId).select("-password");

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }

    // Set user object in request for use in subsequent middleware or route handlers
    req.user = user;

    // Call next middleware or route handler
    next();
  } catch (error) {
    // Handle errors
    console.log("error in protect route middleware: ", error.message);
    res.status(400).json({ message: "internal server error " });
  }
};

export default protectRoute;
