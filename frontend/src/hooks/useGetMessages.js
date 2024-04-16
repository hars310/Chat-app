import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  // State to track loading state and messages
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    // Function to fetch messages for the selected conversation
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        // Set messages in the conversation state
        setMessages(data);
      } catch (error) {
        // Display an error toast if fetching fails
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch messages only if a conversation is selected
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  // Return messages and loading state
  return { messages, loading };
};

export default useGetMessages;
