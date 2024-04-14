import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogOut = () => {
    // State to track loading status
    const [loading, setLoading] = useState(false);
    // Access setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();

    // Function to handle user logout
    const logout = async () => {
        setLoading(true);
        try {
            // Send logout request to server
            const res = await fetch('/api/auth/logout', {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Remove user data from local storage
            localStorage.removeItem('chat-user')
            // Update authenticated user in context to null
            setAuthUser(null)
        } catch (error) {
            // Display error message using toast
            toast.error(error.message)
        } finally {
            // Set loading to false after logout attempt
            setLoading(false)
        }
    }

    // Return loading state and logout function
    return { loading, logout };
}

export default useLogOut;








// import { useState } from "react"
// import { useAuthContext } from "../context/AuthContext"
// import toast from "react-hot-toast"

// const useLogOut = () => {
//     const [loading, setLoading] = useState(false)
//     const {setAuthUser} = useAuthContext()

//     const logout = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/api/auth/logout',{
//                 method:"POST",
//                 headers: { "Content-Type": "application/json"}
//              });
//         const data = await res.json()
//         if(data.error){
//             throw new Error(data.error)
//         }
//         localStorage.removeItem('chat-user')
//         setAuthUser(null)
            
//         } catch (error) {
//             toast.error(error.message)
//     } finally {
//         setLoading(false)
//     }
// }
// return {loading,logout}

// }

// export default useLogOut