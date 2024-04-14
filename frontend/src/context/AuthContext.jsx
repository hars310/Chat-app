import { createContext, useContext, useState } from "react";

// Create a new context for authentication
export const AuthContext = createContext();

// Custom hook to access the authentication context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

// AuthContextProvider component to manage authentication state
export const AuthContextProvider = ({ children }) => {

    // Initialize authUser state with the value from local storage or null
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    // Provide the authUser state and setAuthUser function to children components
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}
