import User from "../models/userModel.js";

export const getUsersForSidebar = async (req,res) =>{
    try {

        const loggedInUserId = req.user._id;

        const allUsersExceptYou = await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        // console.log(allUsersExceptYou)
        res.status(200).json(allUsersExceptYou)
        
        
    } catch (error) {
        console.log("error in getUsersForSidebar controller:", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}