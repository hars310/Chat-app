import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

//fullname->Test Account
//username->testaccount
//password -> test123

const useSignUp = () => {
    // State to track loading status
    const [loading, setLoading] = useState(false);
    // Access setAuthUser function from AuthContext
    const { setAuthUser } = useAuthContext();

    // Function to handle user sign up
    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        // Validate input fields
        const success = handleInputError({ fullname, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);

        try {
            // Send sign up request to server
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Store user data in local storage
            localStorage.setItem("chat-user", JSON.stringify(data))
            // Update authenticated user in context
            setAuthUser(data)
        } catch (error) {
            // Display error message using toast
            toast.error(error.message)
        } finally {
            // Set loading to false after sign up attempt
            setLoading(false)
        }
    }

    // Return loading state and signup function
    return { loading, signup };
}

export default useSignUp;

// Function to handle input validation errors
function handleInputError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password does not match")
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
    }
    if (gender === "other") {
        toast.error("Please select gender")
        return false;
    }
    return true;
}




// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";

// //fullname->Test Account
// //username->testaccount
// //password -> test123

// const useSignUp = () => {

//     const [loading,setLoading] = useState(false);
//     const {setAuthUser} =   useAuthContext()

//     const signup = async ({fullname,username,password,confirmPassword,gender}) =>{
//         const success = handleInputError({fullname,username,password,confirmPassword,gender});
//         if(!success) return;

//         setLoading(true);

//         try {
//             const res = await fetch("/api/auth/signup",{
//                  method:"POST",
//                  headers:{"Content-Type": "application/json" },
//                     body:JSON.stringify({fullname,username,password,confirmPassword,gender}),
//             });
//             const data = await res.json();
//             if(data.error){
//                 throw new Error(data.error);
//             }
//             //now we store user in local storage
//             localStorage.setItem("chat-user",JSON.stringify(data))
//             //and change the context of signup ---> home page
//             setAuthUser(data)

//             // console.log(data)


//         } catch (error) {
//             toast.error(error.message)
//         }finally{
//             setLoading(false)
//         }

//     }
//     return {loading , signup};

  
// }

// export default useSignUp

// function handleInputError({fullname,username,password,confirmPassword,gender}){

//     if(!fullname || !username || !password || !confirmPassword || !gender){
//         toast.error("Please fill all fields");
//         return false;
//     }

//     if(password!==confirmPassword){
//         toast.error("password does not match")
//         return false;
//     }

//     if(password.length < 6) {
//         toast.error("password must be atleast  6 characters long");
//         return false;
//     }
//     if(gender==="other"){
//         toast.error("please select gender")
//         return false;
//     }
//     return true;
// }