import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px]  min-w-96 flex flex-col ">
      {
        noChatSelected ? <NoChatSelected/> : (
          <>
      <div className="bg-zinc-800 h-10 px-4 py-2 ">
        <span className="label-text">To :</span>{" "}
        <span className="text-gray-200 font-bold">John Doe</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome! 😊 John Doe</p>
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
