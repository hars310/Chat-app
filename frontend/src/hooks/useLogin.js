import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    // State to track loading status
    const [loading, setLoading] = useState(false);
    // Access setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();
    
    // Function to handle login logic
    const login = async (username, password) => {
        setLoading(true);
        try {
            // Send login request to server
            const res = await fetch('/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            // Parse response data
            const data = await res.json();
            // Check for errors in response
            if (data.error) {
                throw new Error(data.error);
            }
            // Store user data in local storage
            localStorage.setItem('chat-user', JSON.stringify(data));
            // Update authenticated user in context
            setAuthUser(data);
        } catch (error) {
            // Display error message using toast
            toast.error(error.message);
        } finally {
            // Set loading to false after login attempt
            setLoading(false);
        }
    }

    // Return loading state and login function
    return { loading, login };
}

export default useLogin;


// import { useState } from "react"
// import toast from "react-hot-toast"
// import { useAuthContext } from "../context/AuthContext"


// const useLogin =  () =>{
//     const [loading,setLoading] = useState(false)
//     const {setAuthUser} =  useAuthContext()
    
//     const login = async (username,password) =>{
//         setLoading(true)
//         try {
//             const res = await fetch('/api/auth/login',{
//                 method:"POST",
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify({username,password})
//             })
//             const data = await res.json()
//             if(data.error){
//                 throw new Error(data.error)
//             }
//             localStorage.setItem('chat-user',JSON.stringify(data))
//             setAuthUser(data);
            
//         } catch (error) {
//             toast.error(error.message)
//         }finally{
//             setLoading(false);
//         }
//     }
//     return {loading,login};
// }

// export default useLogin