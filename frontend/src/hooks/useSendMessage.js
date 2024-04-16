import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    // State to track loading state
    const [loading, setLoading] = useState(false);
    // Access the conversation state and setMessages function
    const { setMessages, messages, selectedConversation } = useConversation();

    // Function to send a message
    const sendMessage = async (message) => {
        // Set loading to true to show loading state
        setLoading(true);
        try {
            // Send a POST request to the server to send the message
            const res = await fetch(`api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await res.json();
            // If there's an error in the response, throw an error
            if (data.error) {
                throw new Error(data.error);
            }
            // Update the messages state with the new message
            setMessages([...messages, data]);
        } catch (error) {
            // Display an error toast if sending fails
            toast.error(error.message);
        } finally {
            // Set loading back to false after sending
            setLoading(false);
        }
    };

    // Return the sendMessage function and loading state
    return { sendMessage, loading };
};

export default useSendMessage;
