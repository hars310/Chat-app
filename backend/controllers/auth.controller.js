import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookies from "../utils/generateJWT.js";

// Controller for user signup
export const signup = async (req, res) => {
  try {
    // Get user input data from the request body
    const { fullname, username, password, confirmPassword, gender } = req.body;

    // Check if passwords match
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Generate profile picture URLs
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user
    const newUser = await User.create({
      fullname,
      username,
      gender,
      password: hashedPassword,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // Generate JWT token and set cookies
    await generateTokenAndSetCookies(newUser._id, res);

    // Return user data in the response
    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller:", error.message);
    res.status(500).json(error);
  }
};

// Controller for user login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });

    // Check if user exists and if password is correct
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    
    // if user or password id not correct  send status 401 Unauthorized
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token and set cookies
    generateTokenAndSetCookies(user._id, res);

    // Return user data in the response
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller:", error.message);
    res.status(500).json(error);
  }
};

// Controller for user logout
export const logout = async (req, res) => {
  try {
    // Clear JWT cookie
    res.cookie("jwt", "", { maxAge: 0 });

    // Return success message
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error in logout controller:", error.message);
    res.status(500).json(error);
  }
};
