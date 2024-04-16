import { useEffect } from "react";
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const  {selectedConversation,setSelectedConversation} = useConversation();

  useEffect(()=>{

    //unmount the selected user 
    return () => setSelectedConversation(null);
  },[setSelectedConversation])

  return (
    <div className="md:min-w-[620px]   bg-zinc-700    flex flex-col ">
      {
        !selectedConversation ? <NoChatSelected/> : (
          <>
      <div className="bg-zinc-800 h-12 px-4 pt-4 pb-2 ">
        <span className="label-text">To :</span>{" "}
        <span className="text-gray-200 font-bold">{selectedConversation.fullname}</span>
      </div>

      <Messages />
      <MessageInput/>
      </>
        )
      }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center bg-zinc-800  w-full h-full">
      <div className="text-center sm:text-lg md:text-xl  text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome! 😊 {authUser.fullname}</p>
        <p>Select a chat to start messaging</p>
        <p className="text-3xl md:text-5xl">👋</p>
      </div>
    </div>
  );
};

 

// incase i got stuck while adding dynamic code

// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   const noChatSelected = true;
//   return (
//     <div className="md:min-w-[450px]  min-w-96 flex flex-col ">
//       {
//         noChatSelected ? <NoChatSelected/> : (
//           <>
//       <div className="bg-zinc-800 h-10 px-4 py-2 ">
//         <span className="label-text">To :</span>{" "}
//         <span className="text-gray-200 font-bold">John Doe</span>
//       </div>

//       <Messages />
//       <MessageInput/>
//       </>
//         )
//       }
//     </div>
//   )
// }

// export default MessageContainer

// const NoChatSelected = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome! 😊 John Doe</p>
//         <p>Select a chat to start messaging</p>
//         <p className="text-3xl md:text-5xl">👋</p>
//       </div>
//     </div>
//   );
// };
