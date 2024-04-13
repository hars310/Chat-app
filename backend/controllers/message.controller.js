import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

// Controller function to send a message
export const sendMessage = async (req, res) => {
    try {
        // Extract message from request body
        const { message } = req.body;
        // Extract receiver ID from request parameters
        const { id: receiverId } = req.params;
        // Extract sender ID from request user object
        const senderId = req.user._id;

        // Find conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If conversation doesn't exist, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // If new message is created, add its ID to conversation's messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //socket io here

        //save the message and conversation
        await Promise.all([newMessage.save(),conversation.save()]);

        // Return the new message in the response
        res.status(201).json(newMessage);

    } catch (error) {
        // Handle errors
        console.log("error in sendmessage controller:", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};


export const getMessages = async (req,res) => {
    try {
        const  { id:userToChatId } = req.params;

        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]},

        }).populate("messages")//actual messages array
        
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages)


    } catch (error) {
        console.log("error in getmessages controller:", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}