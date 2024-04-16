import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        // Function to fetch conversations from the API
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setConversations(data);
            } catch (error) {
                // Display an error toast if fetching fails
                toast.error(error.message, "Error");
            } finally {
                setLoading(false);
            }
        };
        // Fetch conversations when the component mounts
        getConversations();
    }, []);

    // Return loading state and conversations array
    return { loading, conversations };
};

export default useGetConversation;
