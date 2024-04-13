import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectToMongoDB = async () => {
    try {
        // Connect to the MongoDB database using the MONGO_DB_URI from environment variables
        await mongoose.connect(process.env.MONGO_DB_URI);
        // Log a message indicating a successful connection
        console.log("Connected to MongoDB");
    } catch (error) {
        // Log an error message if connection fails
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
