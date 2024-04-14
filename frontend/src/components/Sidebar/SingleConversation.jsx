
const SingleConversation = () => {
  return (
    <div className="border-[0.4px] h-14 rounded m-[0.7px] border-zinc-900 mx-2">
        <div className="flex gap-2 items-center  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
            
          </div>
          <div className="ml-4 text-gray-100">
              <h1 className="text-xl">harsh</h1>
              <h2 className="text-sm text-zinc-300">last message</h2>
            </div>
        </div>

    </div>
  )
}

export default SingleConversation




// const SingleConversation = () => {
//   return (
//     <div className="border-[0.4px] rounded m-[0.7px] border-zinc-900 mx-2">
//         <div className="flex gap-2 items-center  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//             <div className="w-12 rounded-full">
//               <img src="https://avatar.iran.liara.run/public" alt="" />
//             </div>
            
//           </div>
//           <div className="ml-4 text-gray-100">
//               <h1 className="text-xl">harsh</h1>
//               <h2 className="text-sm text-zinc-300">last message</h2>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SingleConversation