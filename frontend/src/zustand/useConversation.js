import { create } from 'zustand';

// Create a Zustand store to manage conversation-related state
const useConversation = create((set) => ({
    // The currently selected conversation ID
    selectedConversation: null,
    // Function to set the selected conversation
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

    // Array to store messages for the selected conversation
    messages: [],
    // Function to set messages for the selected conversation
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
